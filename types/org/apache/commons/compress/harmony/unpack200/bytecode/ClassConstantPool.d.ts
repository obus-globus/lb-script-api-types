import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Segment } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/Segment.d.ts'
import type { ClassFileEntry } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassFileEntry.d.ts'
export class ClassConstantPool extends Object {
    constructor()
    // private entries: ClassFileEntry[];
    // private entriesContainsSet: ClassFileEntry[];
    // private indexCache: Map<ClassFileEntry, number>;
    // private mustStartClassPool: ClassFileEntry[];
    // private others: ClassFileEntry[];
    // private othersContainsSet: ClassFileEntry[];
    // private resolved: boolean;
    add(arg0: ClassFileEntry): ClassFileEntry;
    addNestedEntries(): void;
    addWithNestedEntries(arg0: ClassFileEntry): ClassFileEntry;
    entries(): ClassFileEntry[];
    get(arg0: number): ClassFileEntry;
    indexOf(arg0: ClassFileEntry): number;
    // private initialSort(): void;
    resolve(arg0: Segment): void;
    size(): number;
    sortClassPool(): void;
}