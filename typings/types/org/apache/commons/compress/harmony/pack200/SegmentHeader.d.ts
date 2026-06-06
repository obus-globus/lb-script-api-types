import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { BandSet } from '../../../../../../org/apache/commons/compress/harmony/pack200/BandSet.d.ts'
import type { IntList } from '../../../../../../org/apache/commons/compress/harmony/pack200/IntList.d.ts'
import type { SegmentHeader$Counter } from '../../../../../../org/apache/commons/compress/harmony/pack200/SegmentHeader$Counter.d.ts'
export class SegmentHeader extends BandSet {
    constructor()
    readonly archive_modtime: number;
    // private archive_next_count: number;
    // private archive_options: number;
    // private archive_size_hi: number;
    // private archive_size_lo: number;
    readonly attribute_definition_count: number;
    // private band_headers: IntList;
    readonly class_count: number;
    readonly cp_Class_count: number;
    readonly cp_Descr_count: number;
    readonly cp_Double_count: number;
    readonly cp_Field_count: number;
    readonly cp_Float_count: number;
    readonly cp_Imethod_count: number;
    readonly cp_Int_count: number;
    readonly cp_Long_count: number;
    readonly cp_Method_count: number;
    readonly cp_Signature_count: number;
    readonly cp_String_count: number;
    readonly cp_Utf8_count: number;
    readonly deflate_hint: boolean;
    readonly file_count: number;
    // private have_file_modtime: boolean;
    // private have_file_options: boolean;
    // private have_file_size_hi: boolean;
    readonly ic_count: number;
    // private majverCounter: SegmentHeader$Counter;
    addMajorVersion(arg0: number): void;
    appendBandCodingSpecifier(arg0: number): void;
    // private calculateArchiveOptions(): void;
    getArchive_modtime(): number;
    getDefaultMajorVersion(): number;
    have_all_code_flags(): boolean;
    have_class_flags_hi(): boolean;
    have_code_flags_hi(): boolean;
    have_field_flags_hi(): boolean;
    have_file_modtime(): boolean;
    have_file_options(): boolean;
    have_file_size_hi(): boolean;
    have_method_flags_hi(): boolean;
    pack(arg0: OutputStream): void;
    setAttribute_definition_count(arg0: number): void;
    setClass_count(arg0: number): void;
    setCp_Class_count(arg0: number): void;
    setCp_Descr_count(arg0: number): void;
    setCp_Double_count(arg0: number): void;
    setCp_Field_count(arg0: number): void;
    setCp_Float_count(arg0: number): void;
    setCp_Imethod_count(arg0: number): void;
    setCp_Int_count(arg0: number): void;
    setCp_Long_count(arg0: number): void;
    setCp_Method_count(arg0: number): void;
    setCp_Signature_count(arg0: number): void;
    setCp_String_count(arg0: number): void;
    setCp_Utf8_count(arg0: number): void;
    setDeflate_hint(arg0: boolean): void;
    setFile_count(arg0: number): void;
    setHave_all_code_flags(arg0: boolean): void;
    setHave_class_flags_hi(arg0: boolean): void;
    setHave_code_flags_hi(arg0: boolean): void;
    setHave_field_flags_hi(arg0: boolean): void;
    setHave_method_flags_hi(arg0: boolean): void;
    setIc_count(arg0: number): void;
    // private writeArchiveFileCounts(arg0: OutputStream): void;
    // private writeArchiveSpecialCounts(arg0: OutputStream): void;
    // private writeClassCounts(arg0: OutputStream): void;
    // private writeCpCounts(arg0: OutputStream): void;
}