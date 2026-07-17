import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { PropertyChangeListener } from '../../../../../../../java/beans/PropertyChangeListener.d.ts'
import type { File } from '../../../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { JarOutputStream } from '../../../../../../../java/util/jar/JarOutputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface Pack200$Unpacker extends Object{
    addPropertyChangeListener(arg0: PropertyChangeListener): void;
    properties(): JavaMap<string, string>;
    removePropertyChangeListener(arg0: PropertyChangeListener): void;
    unpack(arg0: File, arg1: JarOutputStream): void;
    unpack(arg0: InputStream, arg1: JarOutputStream): void;
}