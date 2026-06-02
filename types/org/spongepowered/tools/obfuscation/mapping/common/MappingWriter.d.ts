import type { PrintWriter } from '../../../../../../java/io/PrintWriter.d.ts'
import type { Filer } from '../../../../../../javax/annotation/processing/Filer.d.ts'
import type { Messager } from '../../../../../../javax/annotation/processing/Messager.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../java/lang/CharSequence.d.ts'
import type { IMessagerEx$MessageType } from '../../../../../../org/spongepowered/tools/obfuscation/interfaces/IMessagerEx$MessageType.d.ts'
import type { IMappingWriter } from '../../../../../../org/spongepowered/tools/obfuscation/mapping/IMappingWriter.d.ts'
export abstract class MappingWriter extends Object implements IMappingWriter {
    constructor(arg0: Messager, arg1: Filer)
    // private filer: Filer;
    // private messager: Messager;
    openFileWriter(arg0: string, arg1: string): PrintWriter;
    printMessage(arg0: IMessagerEx$MessageType, arg1: CharSequence): void;
}