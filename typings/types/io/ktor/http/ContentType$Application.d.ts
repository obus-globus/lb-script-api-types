import type { ContentType } from '../../../io/ktor/http/ContentType.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class ContentType$Application extends Object {
    static INSTANCE: ContentType$Application;
    static TYPE: string;
    // private Any: ContentType;
    /*not mapped: */ getAny(): ContentType;
    // private Atom: ContentType;
    /*not mapped: */ getAtom(): ContentType;
    // private Cbor: ContentType;
    /*not mapped: */ getCbor(): ContentType;
    // private Docx: ContentType;
    /*not mapped: */ getDocx(): ContentType;
    // private FormUrlEncoded: ContentType;
    /*not mapped: */ getFormUrlEncoded(): ContentType;
    readonly GZip: ContentType;
    // private HalJson: ContentType;
    /*not mapped: */ getHalJson(): ContentType;
    // private JavaScript: ContentType;
    /*not mapped: */ getJavaScript(): ContentType;
    // private Json: ContentType;
    /*not mapped: */ getJson(): ContentType;
    // private OctetStream: ContentType;
    /*not mapped: */ getOctetStream(): ContentType;
    // private Pdf: ContentType;
    /*not mapped: */ getPdf(): ContentType;
    // private Pptx: ContentType;
    /*not mapped: */ getPptx(): ContentType;
    // private ProblemJson: ContentType;
    /*not mapped: */ getProblemJson(): ContentType;
    // private ProblemXml: ContentType;
    /*not mapped: */ getProblemXml(): ContentType;
    // private ProtoBuf: ContentType;
    /*not mapped: */ getProtoBuf(): ContentType;
    // private Rss: ContentType;
    /*not mapped: */ getRss(): ContentType;
    // private Soap: ContentType;
    /*not mapped: */ getSoap(): ContentType;
    TYPE: string;
    // private Wasm: ContentType;
    /*not mapped: */ getWasm(): ContentType;
    // private Xlsx: ContentType;
    /*not mapped: */ getXlsx(): ContentType;
    // private Xml: ContentType;
    /*not mapped: */ getXml(): ContentType;
    // private Xml_Dtd: ContentType;
    /*not mapped: */ getXml_Dtd(): ContentType;
    // private Yaml: ContentType;
    /*not mapped: */ getYaml(): ContentType;
    // private Zip: ContentType;
    /*not mapped: */ getZip(): ContentType;
    contains(contentType: ContentType): boolean;
    contains(contentType: CharSequence): boolean;
}