import type { NamespaceContext } from '../../../javax/xml/namespace/NamespaceContext.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface XMLStreamWriter extends Object{
    close(): void;
    flush(): void;
    getNamespaceContext(): NamespaceContext;
    getPrefix(arg0: string): string;
    getProperty(arg0: string): Object;
    setDefaultNamespace(arg0: string): void;
    setNamespaceContext(arg0: NamespaceContext): void;
    setPrefix(arg0: string, arg1: string): void;
    writeAttribute(arg0: string, arg1: string): void;
    writeAttribute(arg0: string, arg1: string, arg2: string): void;
    writeAttribute(arg0: string, arg1: string, arg2: string, arg3: string): void;
    writeCData(arg0: string): void;
    writeCharacters(arg0: string[], arg1: number, arg2: number): void;
    writeCharacters(arg0: string): void;
    writeComment(arg0: string): void;
    writeDTD(arg0: string): void;
    writeDefaultNamespace(arg0: string): void;
    writeEmptyElement(arg0: string): void;
    writeEmptyElement(arg0: string, arg1: string): void;
    writeEmptyElement(arg0: string, arg1: string, arg2: string): void;
    writeEndDocument(): void;
    writeEndElement(): void;
    writeEntityRef(arg0: string): void;
    writeNamespace(arg0: string, arg1: string): void;
    writeProcessingInstruction(arg0: string): void;
    writeProcessingInstruction(arg0: string, arg1: string): void;
    writeStartDocument(): void;
    writeStartDocument(arg0: string): void;
    writeStartDocument(arg0: string, arg1: string): void;
    writeStartElement(arg0: string): void;
    writeStartElement(arg0: string, arg1: string): void;
    writeStartElement(arg0: string, arg1: string, arg2: string): void;
}