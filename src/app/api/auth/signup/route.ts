import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';  // Import NextResponse
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/dbConnect';
import Admin from '@/lib/models/admin';

export async function POST(req: NextRequest) {
  const { name, mobileNumber, password } = await req.json();  // Use req.json() to parse request body

  if (!name || !mobileNumber || !password) {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
  }

  await dbConnect();

  // Check if mobile number already exists
  const existingAdmin = await Admin.findOne({ mobileNumber });
  if (existingAdmin) {
    return NextResponse.json({ message: 'Mobile number already registered' }, { status: 400 });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 12);

  // Create new admin user
  const newAdmin = new Admin({
    name,
    mobileNumber,
    password: hashedPassword,
  });

  try {
    await newAdmin.save();
    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Internal server error', error }, { status: 500 });
  }
}
