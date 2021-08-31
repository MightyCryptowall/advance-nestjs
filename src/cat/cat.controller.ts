import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('cat')
export class CatController {
    
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
