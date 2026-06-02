import type { DataOutput } from '../../../../java/io/DataOutput.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Tag extends Object{
    asRawString(): string;
    copy(): Tag;
    getTagId(): number;
    getValue(): Object;
    write(arg0: DataOutput): void;
}