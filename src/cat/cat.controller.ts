import { CatService } from './cat.service';
import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('cat')
export class CatController {
    constructor(
        private readonly catService:CatService
    ){}
    @Post()
    async createCat() {
        return [];
    }

    @Get()
    async listAll() {
        return [];
    }

    @Delete()
    async removeCat() {
        return [];
    }
}
