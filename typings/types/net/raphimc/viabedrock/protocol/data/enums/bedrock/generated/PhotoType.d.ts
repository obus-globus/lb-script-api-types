import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class PhotoType extends Enum<PhotoType> {
    static Book: PhotoType;
    static PhotoItem: PhotoType;
    static Portfolio: PhotoType;
    static getByName(paramarg0: string): PhotoType;
    static getByName(paramarg0: string, paramarg1: PhotoType): PhotoType;
    static getByValue(paramarg0: number): PhotoType;
    static getByValue(paramarg0: number, paramarg1: PhotoType): PhotoType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PhotoType;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: PhotoType)
    readonly value: number;
    getValue(): number;
    name(): "Portfolio" | "PhotoItem" | "Book";
}