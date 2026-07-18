import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class CacheControl$Visibility extends Enum<CacheControl$Visibility> {
    static Private: CacheControl$Visibility;
    static Public: CacheControl$Visibility;
    static getEntries(): CacheControl$Visibility[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): CacheControl$Visibility;
    static values(): CacheControl$Visibility[];
    private constructor(headerValue: string)
    // private headerValue: string;
    /*not mapped: */ getHeaderValue$ktor_http(): string;
    name(): "Public" | "Private";
}