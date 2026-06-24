import type { Object } from '../../../../java/lang/Object.d.ts'
export interface DestructionQueue$Destroyer<T extends unknown> extends Object{
    begin(count: number): void;
    destroy(t: T): void;
    end(): void;
}