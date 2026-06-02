import type { PropertyChangeListener } from '../../../../../../../java/beans/PropertyChangeListener.d.ts'
import type { OutputStream } from '../../../../../../../java/io/OutputStream.d.ts'
import type { JarFile } from '../../../../../../../java/util/jar/JarFile.d.ts'
import type { JarInputStream } from '../../../../../../../java/util/jar/JarInputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface Pack200$Packer extends Object{
    addPropertyChangeListener(arg0: PropertyChangeListener): void;
    pack(arg0: JarFile, arg1: OutputStream): void;
    pack(arg0: JarInputStream, arg1: OutputStream): void;
    properties(): { [key: string]: string };
    removePropertyChangeListener(arg0: PropertyChangeListener): void;
}