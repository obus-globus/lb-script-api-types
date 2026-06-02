import type { PrintWriter } from '../../../../java/io/PrintWriter.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface CHeader$Header extends Object{
    dependsOn(): Class<CHeader$Header>[];
    name(): string;
    writePreamble(writer: PrintWriter): void;
}