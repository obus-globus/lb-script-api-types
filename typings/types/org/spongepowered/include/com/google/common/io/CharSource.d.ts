import type { Reader } from '../../../../../../../java/io/Reader.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LineProcessor } from '../../../../../../../org/spongepowered/include/com/google/common/io/LineProcessor.d.ts'
export abstract class CharSource extends Object {
    constructor()
    openStream(): Reader;
    readLines<T extends Object | number | string | boolean>(arg0: LineProcessor<T>): T;
}