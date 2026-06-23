import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface RemovableIdMapper<T extends unknown> extends Object{
    fabric_clear(): void;
    fabric_remapId(arg0: number, arg1: number): void;
    fabric_remapIds(arg0: { [key: string]: any }): void;
    fabric_remove(arg0: T): void;
    fabric_removeId(arg0: number): void;
}