import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CustomLevelConfig extends Object {
    static createLevel(paramlevelName: string, paramintLevel: number): CustomLevelConfig;
    private constructor(levelName: string, intLevel: number)
    readonly intLevel: number;
    readonly levelName: string;
    equals(object: Object | null): boolean;
    getIntLevel(): number;
    getLevelName(): string;
    hashCode(): number;
    toString(): string;
}