import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { DeprecationLevel } from '../../kotlin/DeprecationLevel.d.ts'
import type { RequireKotlinVersionKind } from '../../kotlin/internal/RequireKotlinVersionKind.d.ts'
export interface RequireKotlin extends Annotation, Object{
    constructor(version: string, message: string, level: DeprecationLevel, versionKind: RequireKotlinVersionKind, errorCode: number)
    /*not mapped: */ errorCode(): number;
    /*not mapped: */ level(): DeprecationLevel;
    /*not mapped: */ message(): string;
    /*not mapped: */ version(): string;
    /*not mapped: */ versionKind(): RequireKotlinVersionKind;
}