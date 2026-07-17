import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { Attributes$Name } from '../../../../../java/util/jar/Attributes$Name.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MainAttributes extends Object {
    static of(paramarg0: File): MainAttributes;
    static of(paramarg0: URI): MainAttributes;
    private constructor()
    private constructor(arg0: URI)
    // private attributes: JavaMap<any, any>;
    get(arg0: Attributes$Name): string;
    get(arg0: string): string;
}