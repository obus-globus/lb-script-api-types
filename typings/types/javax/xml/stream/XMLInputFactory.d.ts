import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../java/io/Reader.d.ts'
import type { ClassLoader } from '../../../java/lang/ClassLoader.d.ts'
import type { EventFilter } from '../../../javax/xml/stream/EventFilter.d.ts'
import type { StreamFilter } from '../../../javax/xml/stream/StreamFilter.d.ts'
import type { XMLEventReader } from '../../../javax/xml/stream/XMLEventReader.d.ts'
import type { XMLReporter } from '../../../javax/xml/stream/XMLReporter.d.ts'
import type { XMLResolver } from '../../../javax/xml/stream/XMLResolver.d.ts'
import type { XMLStreamReader } from '../../../javax/xml/stream/XMLStreamReader.d.ts'
import type { XMLEventAllocator } from '../../../javax/xml/stream/util/XMLEventAllocator.d.ts'
import type { Source } from '../../../javax/xml/transform/Source.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class XMLInputFactory extends Object {
    static ALLOCATOR: string;
    static IS_COALESCING: string;
    static IS_NAMESPACE_AWARE: string;
    static IS_REPLACING_ENTITY_REFERENCES: string;
    static IS_SUPPORTING_EXTERNAL_ENTITIES: string;
    static IS_VALIDATING: string;
    static REPORTER: string;
    static RESOLVER: string;
    static SUPPORT_DTD: string;
    static newDefaultFactory(): XMLInputFactory;
    static newFactory(): XMLInputFactory;
    static newFactory(paramarg0: string, paramarg1: ClassLoader): XMLInputFactory;
    static newInstance(): XMLInputFactory;
    static newInstance(paramarg0: string, paramarg1: ClassLoader): XMLInputFactory;
    constructor()
    createFilteredReader(arg0: XMLEventReader, arg1: EventFilter): XMLEventReader;
    createFilteredReader(arg0: XMLStreamReader, arg1: StreamFilter): XMLStreamReader;
    createXMLEventReader(arg0: InputStream): XMLEventReader;
    createXMLEventReader(arg0: InputStream, arg1: string): XMLEventReader;
    createXMLEventReader(arg0: Reader): XMLEventReader;
    createXMLEventReader(arg0: XMLStreamReader): XMLEventReader;
    createXMLEventReader(arg0: Source): XMLEventReader;
    createXMLEventReader(arg0: string, arg1: InputStream): XMLEventReader;
    createXMLEventReader(arg0: string, arg1: Reader): XMLEventReader;
    createXMLStreamReader(arg0: InputStream): XMLStreamReader;
    createXMLStreamReader(arg0: InputStream, arg1: string): XMLStreamReader;
    createXMLStreamReader(arg0: Reader): XMLStreamReader;
    createXMLStreamReader(arg0: Source): XMLStreamReader;
    createXMLStreamReader(arg0: string, arg1: InputStream): XMLStreamReader;
    createXMLStreamReader(arg0: string, arg1: Reader): XMLStreamReader;
    getEventAllocator(): XMLEventAllocator;
    getProperty(arg0: string): Object;
    getXMLReporter(): XMLReporter;
    getXMLResolver(): XMLResolver;
    isPropertySupported(arg0: string): boolean;
    setEventAllocator(arg0: XMLEventAllocator): void;
    setProperty(arg0: string, arg1: Object): void;
    setXMLReporter(arg0: XMLReporter): void;
    setXMLResolver(arg0: XMLResolver): void;
}