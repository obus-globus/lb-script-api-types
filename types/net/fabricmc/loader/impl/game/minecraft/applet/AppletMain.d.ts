import type { File } from '../../../../../../../java/io/File.d.ts'
import type { Runnable } from '../../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class AppletMain extends Object implements Runnable {
    static hookGameDir(paramarg0: File): File;
    static main(paramarg0: (Object | null)[]): void;
    private constructor(arg0: string[])
    // private args: string[];
    run(): void;
}