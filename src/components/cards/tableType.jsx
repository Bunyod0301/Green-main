// export const tableType = [
//   [
//     <th key={1} className="p-1 sm:p-2 border">Экин тури</th>,
//     <th key={2} className="p-1 sm:p-2 border">Қайси бегона ўтларга қарши ишлатилади</th>,
//     <th key={3} className="p-1 sm:p-2 border">Сарф меъёри</th>,
//     <th key={4} className="p-1 sm:p-2 border">1 га учун ишлатиладиган суюқлик сарфи, л/га</th>,
//     <th key={5} className="p-1 sm:p-2 border">10 л сув учун препарат сарфи ва майдони, мл (сотих)</th>
//   ],
//   [
//     <th key={1} className="p-1 sm:p-2 border">Экин тури</th>,
//     <th key={2} className="p-1 sm:p-2 border">Қайси бегона ўтга қарши ишлатилади</th>,
//     <th key={3} className="p-1 sm:p-2 border">Сарф меъёри</th>,
//     <th key={4} className="p-1 sm:p-2 border">1 га учун ишлатиладиган суюқлик сарфи, л/га</th>,
//     <th key={5} className="p-1 sm:p-2 border">10 л сув учун препарат сарфи ва майдони, гр (сотих)</th>
//   ],
//   [
//     <th key={1} className="p-1 sm:p-2 border">Экин тури</th>,
//     <th key={2} className="p-1 sm:p-2 border">Кайси зараркунандаларга карши ишлатилади</th>,
//     <th key={3} className="p-1 sm:p-2 border">Сарф меъёри</th>,
//     <th key={4} className="p-1 sm:p-2 border">Коьллаш муддати ва усуллари</th>,
//     <th key={5} className="p-1 sm:p-2 border">Мавсумда неча марта ишлатилади</th>
//   ],
//   [
//     <th key={1} className="p-1 sm:p-2 border">Экин тури</th>,
//     <th key={2} className="p-1 sm:p-2 border">Кайси касалликка карши ишлатилади</th>,
//     <th key={3} className="p-1 sm:p-2 border">Сарф меъёри</th>,
//     <th key={4} className="p-1 sm:p-2 border">Ишлатишь усули ва тавсия этилган чекловлар</th>,
//   ],
//   [
//     <th key={1} className="p-1 sm:p-2 border">Экин тури</th>,
//     <th key={2} className="p-1 sm:p-2 border">Коьлланилиши</th>,
//     <th key={3} className="p-1 sm:p-2 border">1 га учун сарф меъёри</th>,
//     <th key={4} className="p-1 sm:p-2 border">1 га учун ишлатиладиган суюқлик сарфи, л/га</th>,
//   ],
//   [
//     <th key={1} className="p-1 sm:p-2 border">Экин тури</th>,
//     <th key={2} className="p-1 sm:p-2 border">Сарф меъёри</th>,
//     <th key={3} className="p-1 sm:p-2 border">Ишлов тури</th>,
//     <th key={4} className="p-1 sm:p-2 border">Ишлатиш муддати, усули ва тавсия этилган чекловлар</th>,
//   ],
//   [
//     <th key={1} className="p-1 sm:p-2 border">Экин тури</th>,
//     <th key={2} className="p-1 sm:p-2 border">Мақсади</th>,
//     <th key={3} className="p-1 sm:p-2 border">Сарф меъёри</th>,
//     <th key={4} className="p-1 sm:p-2 border">1 га учун ишлатиладиган суюқлик сарфи, л/га</th>,
//     <th key={5} className="p-1 sm:p-2 border">10 л сув учун препарат сарфи ва майдони, мл (сотих)</th>,
//   ],
//   [
//     <th key={1} className="p-1 sm:p-2 border">Экин тури</th>,
//     <th key={2} className="p-1 sm:p-2 border">Мақсади</th>,
//     <th key={3} className="p-1 sm:p-2 border">Сарф меъёри</th>,
//     <th key={4} className="p-1 sm:p-2 border">Қўллаш муддати ва усуллари</th>,
//     <th key={5} className="p-1 sm:p-2 border">Бир мавсумда неча марта ишлатилади</th>,
//   ],
//   [
//     <th key={1} className="p-1 sm:p-2 border">Экин тури</th>,
//     <th key={2} className="p-1 sm:p-2 border">Мақсади</th>,
//     <th key={3} className="p-1 sm:p-2 border">Сарф меъёри</th>,
//     <th key={4} className="p-1 sm:p-2 border">1 га учун ишлатиладиган суюқлик сарфи, л/га</th>,
//     <th key={5} className="p-1 sm:p-2 border">10 л сув учун препарат сарфи ва майдони, мл (сотих)</th>,
//   ]
// ]

import { useTranslation } from "react-i18next"


export const tableType = () => { 
  const { t } = useTranslation()
  
  return [
    [
      <th key={1} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.ekin_turi")}</th>,
      <th key={2} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.begona_utlar")}</th>,
      <th key={3} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.sarflanish_mezoni")}</th>,
      <th key={4} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.suyuklik_sarfi")}</th>,
      <th key={5} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.preparat_sarfi")}</th>
    ],
    [
      <th key={1} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.ekin_turi")}</th>,
      <th key={2} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.begona_ut")}</th>,
      <th key={3} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.sarflanish_mezoni")}</th>,
      <th key={4} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.suyuklik_sarfi")}</th>,
      <th key={5} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.preparat_sarfi")}</th>
    ],
    [
      <th key={1} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.ekin_turi")}</th>,
      <th key={2} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.zararkunandalar")}</th>,
      <th key={3} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.sarflanish_mezoni")}</th>,
      <th key={4} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.qullash_muddati")}</th>,
      <th key={5} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.mavsumda_necha_marta")}</th>
    ],
    [
      <th key={1} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.ekin_turi")}</th>,
      <th key={2} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.kasallik")}</th>,
      <th key={3} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.sarflanish_mezoni")}</th>,
      <th key={4} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.ishlatish_muddatlari")}</th>
    ],
    [
      <th key={1} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.ekin_turi")}</th>,
      <th key={2} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.maqsad")}</th>,
      <th key={3} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.sarflanish_mezoni")}</th>,
      <th key={4} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.suyuklik_sarfi")}</th>
    ],
    [
      <th key={1} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.ekin_turi")}</th>,
      <th key={2} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.sarflanish_mezoni")}</th>,
      <th key={3} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.ishlov_turi")}</th>,
      <th key={4} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.ishlatish_muddatlari")}</th>
    ],
    [
      <th key={1} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.ekin_turi")}</th>,
      <th key={2} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.maqsad")}</th>,
      <th key={3} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.sarflanish_mezoni")}</th>,
      <th key={4} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.suyuklik_sarfi")}</th>,
      <th key={5} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.preparat_sarfi")}</th>
    ],
    [
      <th key={1} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.ekin_turi")}</th>,
      <th key={2} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.maqsad")}</th>,
      <th key={3} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.sarflanish_mezoni")}</th>,
      <th key={4} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.qullash_muddati")}</th>,
      <th key={5} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.mavsumda_necha_marta")}</th>
    ],
    [
      <th key={1} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.ekin_turi")}</th>,
      <th key={2} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.maqsad")}</th>,
      <th key={3} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.sarflanish_mezoni")}</th>,
      <th key={4} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.suyuklik_sarfi")}</th>,
      <th key={5} className="p-1 sm:p-2 border">{t("PlantProtection.tableType.preparat_sarfi")}</th>
    ]
  ]
}



export const NPK_DATA = [
  {
    id: 1,
    titleUz: 'GreenPlus NPK',
    titleRu: 'GreenPlus NPK',
    descriptionUz: "Green Plus NPK белгиланган нисбатда барча ўсимликлар ва мевали дарахтларда хавфсиз ишлатиладиган мувозанатли ўғитдир.",
    descriptionRu: "Green Plus NPK белгиланган нисбатда барча ўсимликлар ва мевали дарахтларда хавфсиз ишлатиладиган мувозанатли ўғитдир.",
    productPicture: "/npk/image.png",
    static: true
  },
  {
    id: 2,
    titleUz: 'POLIFERT NPK',
    titleRu: 'POLIFERT NPK',
    descriptionUz: "Poly Fert NPK белгиланган нисбатда барча ўсимликлар ва мевали дарахтларда хавфсиз ишлатиладиган мувозанатли ўғитдир. Таркибидаги қўшимча магний ва ферментлар туфайли озиқ моддаларнинг",
    descriptionRu: "Poly Fert NPK белгиланган нисбатда барча ўсимликлар ва мевали дарахтларда хавфсиз ишлатиладиган мувозанатли ўғитдир. Таркибидаги қўшимча магний ва ферментлар туфайли озиқ моддаларнинг",
    productPicture: "/npk/npk2.jpg",
    static: true
  }
]

