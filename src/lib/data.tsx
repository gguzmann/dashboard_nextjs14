import prisma from "./db";
export async function getData() {
    try {
        const data = await prisma.user.findMany()
        return { data }
    } catch (error) {
        return { error }
    }
}