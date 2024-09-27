import {
  IsArray, IsDefined, IsIn, IsOptional, IsString, MinLength, ValidateNested
} from 'class-validator';
import { MediaDto } from '@gitroom/nestjs-libraries/dtos/media/media.dto';
import { Type } from 'class-transformer';

export class YoutubeTagsSettings {
  @IsString()
  value: string;

  @IsString()
  label: string;
}

export class YoutubeSettingsDto {
  @IsString()
  @MinLength(2)
  @IsDefined()
  title: string;

  @IsOptional()
  @ValidateNested()
  description?: string;

  @IsIn(['public', 'private', 'unlisted'])
  @IsDefined()
  privacy: string;

  @IsIn(['youtube#video', 'youtube#short'])
  @IsDefined()
  kind: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => MediaDto)
  thumbnail?: MediaDto;

  @IsArray()
  @IsOptional()
  tags: YoutubeTagsSettings[];
}
