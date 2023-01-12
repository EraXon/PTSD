import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { DeliveryService } from './delivery.service';
import { Delivery } from './interfaces/delivery.interface';

@Controller('deliveries')
export class DeliverysController {
  constructor(private readonly deliverysService: DeliveryService) {}

  @Post()
  async create(@Body() createDeliveryDto: CreateDeliveryDto) {
    return this.deliverysService.create(createDeliveryDto);
  }

  @Get()
  async findAll(): Promise<Delivery[]> {
    return this.deliverysService.findAll();
  }
}