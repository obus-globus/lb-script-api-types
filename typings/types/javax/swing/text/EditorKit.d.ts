import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { Reader } from '../../../java/io/Reader.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Writer } from '../../../java/io/Writer.d.ts'
import type { Action } from '../../../javax/swing/Action.d.ts'
import type { JEditorPane } from '../../../javax/swing/JEditorPane.d.ts'
import type { Caret } from '../../../javax/swing/text/Caret.d.ts'
import type { Document } from '../../../javax/swing/text/Document.d.ts'
import type { ViewFactory } from '../../../javax/swing/text/ViewFactory.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../java/lang/Cloneable.d.ts'
export abstract class EditorKit extends Object implements Serializable, Cloneable {
    constructor()
    clone(): Object;
    protected clone(): Object;
    createCaret(): Caret;
    createDefaultDocument(): Document;
    deinstall(arg0: JEditorPane): void;
    getActions(): Action[];
    getContentType(): string;
    getViewFactory(): ViewFactory;
    install(arg0: JEditorPane): void;
    read(arg0: InputStream, arg1: Document, arg2: number): void;
    read(arg0: Reader, arg1: Document, arg2: number): void;
    write(arg0: OutputStream, arg1: Document, arg2: number, arg3: number): void;
    write(arg0: Writer, arg1: Document, arg2: number, arg3: number): void;
}