import type { Object } from '../../../../java/lang/Object.d.ts'
export interface StringMap extends Object{
    get(key: string): string | null;
    remove(key: string): string | null;
    set(key: string, value: string): void;
}