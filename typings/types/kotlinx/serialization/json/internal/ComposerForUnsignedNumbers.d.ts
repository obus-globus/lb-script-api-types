import type { Composer } from '../../../../kotlinx/serialization/json/internal/Composer.d.ts'
import type { InternalJsonWriter } from '../../../../kotlinx/serialization/json/internal/InternalJsonWriter.d.ts'
export class ComposerForUnsignedNumbers extends Composer {
    constructor(writer: InternalJsonWriter, forceQuoting: boolean)
    // private forceQuoting: boolean;
    print(v: boolean): void;
    print(v: number): void;
    print(v: string): void;
    print(v: number): void;
    print(v: number): void;
    print(v: number): void;
    print(v: number): void;
    print(v: number): void;
    print(v: string): void;
}