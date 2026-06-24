import type { Class } from '../../../java/lang/Class.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { MethodHandles$Lookup } from '../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { ClassFileDumper } from '../../../jdk/internal/util/ClassFileDumper.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class MethodHandles$Lookup$ClassDefiner extends Record {
    constructor(lookup: MethodHandles$Lookup, internalName: string, bytes: number[], classFlags: number, dumper: ClassFileDumper)
    // private bytes: number[];
    // private classFlags: number;
    // private dumper: ClassFileDumper;
    // private internalName: string;
    // private lookup: MethodHandles$Lookup;
    bytes(): number[];
    classFlags(): number;
    defineClass(arg0: boolean): Class<Object>;
    defineClass(arg0: boolean, arg1: Object): Class<Object>;
    defineClassAsLookup(arg0: boolean): MethodHandles$Lookup;
    defineClassAsLookup(arg0: boolean, arg1: Object): MethodHandles$Lookup;
    dumper(): ClassFileDumper;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    internalName(): string;
    // private isNestmate(): boolean;
    lookup(): MethodHandles$Lookup;
    toString(): string;
}