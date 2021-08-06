import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactModule } from './modules/contact/contact.module';
import { EducationModule } from './modules/education/education.module';
import { ProfileModule } from './modules/profile/profile.module';
import { SkillModule } from './modules/skill/skill.module';
import { WorkExperienceModule } from './modules/work-experience/work-experience.module';

console.log(process.env);
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
      entities: [__dirname + '/**/*.entity.{js,ts}'],
      synchronize: false,
    }),
    ProfileModule,
    EducationModule,
    WorkExperienceModule,
    SkillModule,
    ContactModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
