import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DelayedException<T extends Exception> extends Object{
    create(contents: string, position: number): T;
}