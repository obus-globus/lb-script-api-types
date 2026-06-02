import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefPdfPrintSettings$MarginType } from '../../../org/cef/misc/CefPdfPrintSettings$MarginType.d.ts'
export class CefPdfPrintSettings extends Object {
    constructor()
    display_header_footer: boolean;
    footer_template: string;
    generate_document_outline: boolean;
    generate_tagged_pdf: boolean;
    header_template: string;
    landscape: boolean;
    margin_bottom: number;
    margin_left: number;
    margin_right: number;
    margin_top: number;
    margin_type: CefPdfPrintSettings$MarginType;
    page_ranges: string;
    paper_height: number;
    paper_width: number;
    prefer_css_page_size: boolean;
    print_background: boolean;
    scale: number;
    clone(): CefPdfPrintSettings;
}