import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Profile } from 'src/entities/profile.entity';
import { ProfileService } from './profile.service';

@ApiTags('Profiles')
@Controller()
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @ApiOperation({ summary: 'Get list of profiles' })
  @Get('profiles')
  async getEducations(): Promise<{ profiles: Profile[] }> {
    const profiles = await this.profileService.getAll();
    return { profiles };
  }

  @ApiOperation({ summary: 'Get profile by id' })
  @Get('profiles/:id')
  async getProfile(@Param('id') id: number): Promise<{ profile: Profile }> {
    const profile = await this.profileService.getById(id);
    return { profile };
  }
}
