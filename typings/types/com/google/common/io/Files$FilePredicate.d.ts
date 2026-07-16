import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { LineProcessor } from '../../../../com/google/common/io/LineProcessor.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Files$FilePredicate extends Enum<Files$FilePredicate> implements Predicate<File> {
    static IS_DIRECTORY: Files$FilePredicate;
    static IS_FILE: Files$FilePredicate;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Files$FilePredicate;
    static values(): Files$FilePredicate[];
    constructor(arg2: LineProcessor<string[]>)
    test(input: File): boolean;
    name(): "IS_DIRECTORY" | "IS_FILE";
}