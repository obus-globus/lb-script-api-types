import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ServerTextFilter$IgnoreStrategy extends Object{
    shouldIgnore(message: string, removedCharCount: number): boolean;
}