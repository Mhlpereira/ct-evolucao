'use server'

import prisma from '@/lib/prisma'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/react-native.js'
import { connect } from 'http2'

export async function createAula(slug: string) {
  try{
  await prisma.aula.create({
    data: {
      professor:{
        connect: {
            slug: slug
        }
      }
    },
  })} catch(error){
    if(error instanceof PrismaClientKnownRequestError){
      if(error.code === "P1000"){
        console.log('Falha na autenticação de db')
      }
    }
  }
}

export async function updateProfessor(
  formData: FormData,
  id: string,
) /*podendo fazer por slug tb*/ {
  await prisma.professor.update({
    where: { id },
    data: {
      name: formData.get('name') as string,
      slug: (formData.get('slug') as string)
        .replace(/\s+/g, '-')
        .toLocaleLowerCase(),
      email: formData.get('email') as string, // fazer lógica para verificar se é unico
      celular: formData.get('celular'),
    },
  })
}

export async function updateSenhaProfessor(
    formData: FormData,
    id: string,
  ) /*podendo fazer por slug tb*/ {
    await prisma.professor.update({
      where: { id },
      data: {
        senha: formData.get('senha'),
      },
    })
  }