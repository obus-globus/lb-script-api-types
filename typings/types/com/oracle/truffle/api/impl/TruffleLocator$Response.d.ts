import type { ClassLoader } from '../../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TruffleLocator$Response extends Object {
    constructor(loaders: ClassLoader[])
    // private loaders: ClassLoader[];
    registerClassLoader(languageLoader: ClassLoader): void;
}