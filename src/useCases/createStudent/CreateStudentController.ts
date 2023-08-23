import { Request, Response } from "express";
import { CreateStudentUseCase } from "./CreateStudentUseCase";

class CreateStudentController {
    async handle(request: Request, response: Response) {
        const { name, birthdate, neighborhoodId, addressId, classId, shiftId, addressNumber } = request.body

        const createStudentUseCase = new CreateStudentUseCase()

        const student = await createStudentUseCase.execute({ name, birthdate, neighborhoodId, addressId, classId, shiftId, addressNumber })

        return response.json(student)
    }
}

export { CreateStudentController }