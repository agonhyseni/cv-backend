import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactModule } from './modules/contact/contact.module';
import { EducationModule } from './modules/education/education.module';
import { ProfileModule } from './modules/profile/profile.module';
import { SkillModule } from './modules/skill/skill.module';
import { WorkExperienceModule } from './modules/work-experience/work-experience.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DB,
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
export class AppModule { }
