import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { ConfigContext } from "sanity";
import { StructureBuilder } from "sanity/structure";

const myStructure = (S: StructureBuilder, context: ConfigContext) =>
  S.list()
    .title("Site")
    .items([
      S.listItem()
        .title("Home Page")
        .id("home")
        .child(
          S.document().schemaType("home").title("Home Page").documentId("home")
        ),
      S.listItem()
        .title("Volunteer Navigation")
        .id("volunteerNav")
        .child(
          S.document()
            .schemaType("volunteerNav")
            .title("Volunteer Navigation")
            .documentId("volunteerNav")
        ),
      orderableDocumentListDeskItem({
        type: "volunteerPage",
        S,
        context,
        title: "Volunteer Pages",
      }),
      S.divider(),
      S.documentTypeListItem("imageAssets").title("Image Assets"),
      S.documentTypeListItem("fileAssets").title("File Assets"),
    ]);

export default myStructure;
