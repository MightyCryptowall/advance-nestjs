import { CreateCatDto } from './cat.dto';
import { CatService } from './cat.service';
import { Body, Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('cat')
export class CatController {
    constructor(
        private readonly catService:CatService
    ){}
    @Post()
    async createCat(@Body() cat: CreateCatDto) {
        return this.catService.create(cat);
    }

    @Get()
    async listAll() {
        return this.catService.findAll();
    }

    @Delete()
    async removeCat() {
        return [];
    }
}
