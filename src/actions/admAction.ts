'use server'

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function createProfessor(formData: FormData) {
    await prisma.professor.create({
      data: {
        name: formData.get('name') as string,
        slug: (formData.get('slug') as string)
          .replace(/\s+/g, '-')
          .toLocaleLowerCase(),
        email: formData.get('email') as string, // fazer lógica para verificar se é unico
        celular: formData.get('celular'),
        senha: formData.get('senha'),
      },
    })
  }