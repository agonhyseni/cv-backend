import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EducationModule } from './modules/education/education.module';
import { ProfileModule } from './modules/profile/profile.module';
import { SkillModule } from './modules/skill/skill.module';
import { WorkExperienceModule } from './modules/work-experience/work-experience.module';

console.log('__dirname', __dirname);
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.POSTGRES_URL,
      entities: [__dirname + '/**/*.entity.{js,ts}'],
      synchronize: true,
    }),
    ProfileModule,
    EducationModule,
    WorkExperienceModule,
    SkillModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
