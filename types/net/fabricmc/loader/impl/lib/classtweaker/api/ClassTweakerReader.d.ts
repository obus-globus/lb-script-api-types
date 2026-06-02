import type { BufferedReader } from '../../../../../../../java/io/BufferedReader.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface ClassTweakerReader extends Object{
    read(arg0: BufferedReader, arg1: string): void;
    read(arg0: number[], arg1: string): void;
}