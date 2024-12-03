"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const createSubject = async (data: any) => {
  try {
    const subject = await prisma.subject.create({ data });
    revalidatePath("/list/subjects");
    return { success: true };
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const createExam = async (data: any) => {
  try {
    const subject = await prisma.exam.create({ data });
    revalidatePath("/list/exams");
    return { success: true };
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const createTeacher = async (data: any) => {
  try {
    const subject = await prisma.teacher.create({ data });
    revalidatePath("/list/teahers");
    return { success: true };
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const createStudent = async (data: any) => {
  try {
    const subject = await prisma.student.create({ data });
    revalidatePath("/list/students");
    return { success: true };
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const deleteTeacher = async (id: any) => {
  try {
    await prisma.teacher.delete({
      where: {
        id,
      },
    });
    revalidatePath("/list/teachers");
  } catch (error) {
    return error;
  }
};
