import { CaseStudyData, ProjectPreview } from '../types';

export const curatedProjects: ProjectPreview[] = [
  {
    id: 'aura',
    title: 'Aura',
    subtitle: 'Experiencia sensorial',
    category: 'branding',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0n511VgbG9Y7Mx3Fw3lmGtLtkwhI-5EMYscviIT8vdVJW7s2qMfrVmzDHjMlSGKz9bASUTHrXs3SuGI5GLGv9oNIUJxt6VtePDPUupYsMPjCSs4Ll4mF8WF_a6EdGsqa6CMJ_cYLsYJLKd3qkoN0G5NpPZGzTEUW3HN3DrdneigDIY5Uw2xFWhZWLr4zyqxCclkfWMyxFNkJz9pOd6p0xVNHW9UzwOBLKCWj-CaGiHvYgNSaSRSzZcQ',
    alt: 'Editorial visual identity mockup for luxury fragrance brand Aura, minimalist sleek dark graphite flacon resting on textured volcanic stone',
    hasDetailedCase: true,
  },
  {
    id: 'lumen',
    title: 'Lumen',
    subtitle: 'Hospitality & Luxury Bar',
    category: 'rebranding',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzbtQ0VpaZ3a4i39yNakrsz0_Hwfv7_5nE1Gybom5O7fP5rzjPDa0SyfBOasm171aiGSXkhjTXH1565aIaF6eR94yCby-_cyCGgDD_mEeOHp5wRYxfYVyjustAjLDLHzWJ-MElP-b_3EVnY452t-e-mrSW9-rfl7gXS6hus_pN2rORN8Tg5T6dxhOYdcnsObkSdCu1t54Uk3i4CrtnRYnNlXyjWpafblxPFOXPBvsU0aSiduakjEsqnw',
    alt: 'Modern architectural branding for Lumen Luxury Bar, moody amber backlit interior with bespoke typographic brass menu and cut crystal glassware',
    hasDetailedCase: true,
  },
  {
    id: 'botanica',
    title: 'Botanica',
    subtitle: 'Artisanal Spirits & Organic Goods',
    category: 'identidad-visual',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFS7rNCrcW3CnBy11XGUvDGQxZchu1x1kD5wm1XP74xe3_Vug7x4cdKBQOeR7nzuiQmOINsxoUTMVEQd-aAYLhUDzHc74aaJIigJ0QW_jNHN7LcEmsVOWWBJzNdhHfghNMHclqA1hvOIygNCXB2yDWboeszdgUbIDbrAhtmXIbdsv0h_FVMdzx14HLuPyqjw3fFK80Rs59QFzLIEzenhQVJqP9AEyKoM00f-4il8FKZ7klzAigg7iaAA',
    alt: 'Premium packaging design for Botanica Artisanal Spirits, heavy embossed amber glass bottle on warm limestone pedestal with minimalist botanical typography',
    hasDetailedCase: true,
  },
  {
    id: 'aurora',
    title: 'Aurora',
    subtitle: 'Ceramics & Homeware Atelier',
    category: 'direccion-creativa',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5iKeZ2NaMSdeIN_-ibjZcqvcbspWpmjN6TESIymd0h9wakAXCGffNrb7222ft-8LyNWX7Wb4Lmeu223P3aHFLF-5707RCACOuSPUOvLi6-8oDi1E7v_MoI_ZP6Ma-UV2dVGI-cvUN6gWm0gyaDRI61XvTAGgp-ScTjApjuieI-bLsSirts9unH16JMF82T7HubZzWZCv9VvK2agPxxFAxLNPJBxLhUUCvqn3ELwvDA5y5amyhV8RPyw',
    alt: 'Editorial visual identity and ceramic objects collection for Aurora Atelier, sculptural raw terracotta vases arranged in architectural formation on concrete slab',
    hasDetailedCase: true,
  },
];

export const caseStudies: Record<string, CaseStudyData> = {
  aura: {
    id: 'aura',
    caseNumber: 'CASO 04',
    categoryTag: 'IDENTIDAD SENSORIAL',
    title: 'AURA',
    subtitle: 'Una exploración visual que rompe con lo convencional y traduce las sensaciones en identidad.',
    heroManifesto: 'En un mundo saturado de estímulos, donde todo compite por ser visto, las experiencias han dejado de sentirse.',
    heroManifestoItalic: 'se siente.',
    heroDescription:
      'Las marcas se construyen desde lo visual, pero pocas logran conectar desde lo sensorial. Permanecen estáticas. Predecibles. Superficiales. Era necesario replantear la forma en que percibimos. Así nace AURA: una exploración visual que rompe con lo convencional y traduce las sensaciones en identidad, dando forma a un espinche sensorial que se expande, se transforma y se siente.',
    meta: {
      client: 'AURA LABORATORIES',
      discipline: 'REBRANDING, DIRECCIÓN DE ARTE, PACKAGING',
      year: '2025',
      location: 'BARCELONA • CDMX',
    },
    themeColor: '#E6E8B4',
    themeTextColor: '#1e2008',
    gallery: [
      {
        tag: '01 • ARQUITECTURA DE MARCA & PACKAGING PRIMARIO',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB35kFuuKUEllsiSI9CjgL9_H3w5g_9q9f0SvIqE1hYqZXpPUx2jM2iVI84FE-jXMCD1UCUBQM8LAhTXHhGPGo4qNNoHU3nyMb5SLUJoA3fpH4U7YjtG50NsH-ixrlXAgGVvRM8pjlSLofbOdieznVZ2fJbtiqoMgDIEMN27JSSsRyP_R55u67GwGnUAKCX38I-cQop6m7tcJLptQ6mILvLgnvFYpdeP3FsExEiw_FtnsARLAvnCgU5Jg',
        alt: 'High-end luxury brand mockup for Aura sensorial identity showcasing premium cosmetic packaging, tactile frosted glass bottles, and textured stationery',
        aspect: 'aspect-[21/9]',
      },
      {
        tag: '02 • PAPELERÍA TÁCTIL & BAJORRELIEVE',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAA4JkhLt9z-NiIFR1qN3OzKTLJ8cL6NCzuZaRnKVmmt-hHScAq8ypcLCOxAKk5M6RPaG_XmF5HxogE4fC1Uk6yeXcm0E6vRzQMDJWHklchjbhTc5BAPm5H8q-2dWHQlz7_0SqYl2sJn_UpkcZdRljPu-suZEiO2cve2kFBYy73OTQhonIGadW6DHpsefaq3F9gf_ahBue8rAGAeToDhg6o__ncah0FBexqcQcd__Py6GClJJ7e6DlcAA',
        alt: 'Close up editorial photography of textured embossed linen business card with subtle gold hot stamping for Aura brand',
        aspect: 'aspect-[4/3]',
      },
      {
        tag: '03 • REFRACCIÓN Y ESPECTRO LUMÍNICO',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUz81weJuZGFK4s7ZABRItTHA4wkIXafix0LeJWGlE8K1N-syEOojMFob35vRJ3uEW_3aG-74965-egshavEd7_XoRIAkPnAz08w6ch3ZojP9Xy9KGwrpal_58CfKCtDX3MHr4cD-s1UcnTLi-G9WdBTc6DiF7pEO2gJeb2nStXn4QkCOueFGVH0kbazKCvLAAYAMtwAtNxeL85qUI7sAp1vb-j32yMawsS_MENIYCTUhsPkKGdYr26A',
        alt: 'Editorial campaign still shot of Aura sensorial identity, fluid kinetic light gradient casting warm amber and acid lime refractions on minimalist perfume vessel',
        aspect: 'aspect-[4/3]',
      },
      {
        tag: '04 • MONOGRAFÍA TIPOGRÁFICA',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl-2cnfoa0y-Ag6nPmGZmlaqrnnO066vbrKD7xWUsEzZKQCwFtSaxeTK4l3rv3VT2yBqOnjZDzopDixVcp_LVBFtbqMZVm5lJ4YD7cVMP_esN3H3SxX_zuvAbeQYLs0r4rztfw6lwEUpYLqwh6hbr7t6yRTlTiEGuTkglTmfDYsYC7iHIjIo1Vodzd6KbLozWeIyLEtXMMJyZc6mHYWj1gQd0dtclrdrvZW-GMHUx4kNiOQKKJfJ89lw',
        alt: 'Monochrome typographic book design for Aura brand guideline monograph opened on clean pedestal',
        aspect: 'aspect-[3/4]',
      },
      {
        tag: '05 • ECOSISTEMA DIGITAL HAUTE',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_CkG28AFrM41nTyZyvLja2R3IYB0WYKluG6UZR_mehnF5yYjVc9HwAziE0I6J3s17fBZD5lpS3kNU54DOtEb3n_Jnlf4Lf7nNDcc-NfNjqsr27NxAPphWvfa2jrVbgCCnl7A_EB5ejSeN9xwMpw6-UWGP_QWCrLlXYJxqyAq564xQxPRQdFyOzmSsS9S675inIUTSSIF_K_8X5tVD9M55NZ3OfPhWPMtajA2dZOtWveNiOOda6aia4w',
        alt: 'Digital interface mockups of Aura luxury e-commerce on sleek mobile display placed next to sculpted porcelain cup and raw pigments',
        aspect: 'aspect-[16/9]',
      },
      {
        tag: '06 • ESPINCHE SENSORIAL ESPACIAL',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADPcOjDDNuEBGyq0SZJkt8lsehcepLoxmMCSS44uL-O2cc4mddr6QawAI_6dxdrWYvd-PdKKtE1ugTGQWikeeEanx-JwZCI4S-Vu8x7jtbgETdvhy8TGVesEacXjfcnAo8sxP1EDecKBnzdB2EqFL0pg6DlDg7thlFkz7axOTFyvy_iC2oBBpe9axnn5DH4GfOO79Q6pL2UsNjsfem0NVNXoRH5NMGCC7YoUyw0MIjUuSSL_Sh-NzlLg',
        alt: 'Brand experience room installation with translucent fabric banners projecting the Aura gradient motion art in contemporary art gallery space',
        aspect: 'aspect-[16/9]',
      },
      {
        tag: '07 • LÍNEA DE PRODUCTO • SÉRUM',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCI806bdVh-Ic5b9az0p3-wsFz2kMwD_Q20dHQK4gZaihhv-4buJghkH8CUP4QTjnuZjh3CJ8RgmNmva3M-XjPb-hdV-Jjn4ro771xzlUAA2bszN_ZAPweKCQDs67oyH7_5-H3_BJREMDnFOR7IAo3-4qdnhWyWx2K4buB0aBHHfqY9MkH_Vt8V3sh3rDhWK64zyVHjrKsWUT3Ky5GIdz0jDo6Q3891B6HrDQcrlbNaZmqiLWk7hETVDg',
        alt: 'Detailed studio mockup of Aura luxury skin serum dropper bottle against warm travertine stone and deep charcoal shadows',
        aspect: 'aspect-[4/5]',
      },
      {
        tag: '08 • EXPLORACIÓN CROMÁTICA & TEXTURAS',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgo1Wrh0LqyrXH3LhQPk1IezLiNTEMs1wFe5Yp7J7z09e03MRVAV55ldpUn4SU_GloI9Xs3ABaxPa3nMRD2oDdlAkFN0lARn5KOryOPyu06eQIGWkma7iTAtDQDG720lELzKeGzt0egdIHryoFrZGDIesZiASTrKggrWaKYELII3hBkrrLuXUWGs3QQWI5GqzPyspx86t9srUXUIgMF11kWkKltIzuJf5ylWgfjAfo237VrykagFQT6g',
        alt: 'Creative direction moodboard featuring raw velvet swatches, color swatches of cadmium orange, chartreuse yellow and deep ink black for Aura identity',
        aspect: 'aspect-[4/5]',
      },
      {
        tag: '09 • ESPACIO FÍSICO INSIGNIA',
        title: 'Donde la marca se convierte en atmósfera.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZFGrtH5-imJ7VSMGBloomN8vEP6KtT-FqYSYtolbHJCDC6oXPzLEWDge_nvwETGxAI4VGPqhvBfWucPVEetLM64rmdkmeAStnphn0D9kDEunPj8VvQg7bLEyJo_6X06r_t6-ZgkHol3_XTNuLUN69859jqDhAh1SYCJcD_1bELw504Un5QlN_Q4o1qwneZ088ODqFVEAatdIxDLeeVamm03DznQDQ4sKsy04i3xFcCcnA-S02Tn4HPg',
        alt: 'Panoramic architectural view of the Aura flagship boutique interior designed with warm minimal curves, fluted glass partitions and recessed ambient lighting',
        aspect: 'aspect-[21/8]',
      },
    ],
    storySubtitle: 'Crónica del proceso investigativo, conceptual y formal para trascender la barrera retiniana.',
    storyDetails: [
      { label: 'Fase', value: '01 — 06' },
      { label: 'Enfoque', value: 'Sensorial' },
      { label: 'Duración', value: '18 Semanas' },
    ],
    stories: [
      {
        number: '01',
        title: 'UNA NUEVA FORMA DE SENTIR',
        paragraphs: [
          'En un entorno donde lo visual domina, las experiencias han perdido profundidad. Todo está diseñado para ser visto, pero no necesariamente para ser sentido. En medio de esta saturación, surge la necesidad de reconectar con lo sensorial.',
          'AURA nace como una respuesta a esta desconexión.',
        ],
      },
      {
        number: '02',
        title: 'MÁS ALLÁ DE LO VISUAL',
        paragraphs: [
          'El reto no era crear una marca convencional, sino construir una experiencia. Una identidad capaz de traducir sensaciones en lenguaje visual, generando una conexión más intuitiva y emocional con el espectador.',
        ],
        italicQuote: 'No se trataba solo de estética, sino de percepción.',
      },
      {
        number: '03',
        title: 'ESPINCHE SENSORIAL',
        paragraphs: [
          'El concepto de espinche sensorial surge como eje central del proyecto: una expansión de estímulos que se entrelazan, se transforman y generan una respuesta emocional.',
          'Cada elemento visual fue pensado como parte de este sistema vivo, donde forma, color y composición no solo comunican, sino que provocan.',
        ],
      },
      {
        number: '04',
        title: 'CONSTRUYENDO LA EXPERIENCIA',
        paragraphs: [
          'El desarrollo del proyecto se basó en la experimentación constante. Formas orgánicas, contrastes vibrantes y composiciones dinámicas permitieron explorar cómo pequeñas variaciones podían alterar la percepción.',
          'AURA evolucionó desde lo abstracto hacia un sistema visual estructurado, manteniendo siempre su esencia experimental y sensorial.',
        ],
      },
      {
        number: '05',
        title: 'ROMPIENDO LO CONVENCIONAL',
        paragraphs: [
          'La identidad se aleja de estructuras rígidas para proponer un lenguaje visual fluido y expresivo. Colores envolventes, elementos en transformación y una estética dinámica construyen una experiencia que se siente en movimiento.',
        ],
        italicQuote: 'Más que una marca, AURA es una atmósfera.',
      },
      {
        number: '06',
        title: 'UNA EXPERIENCIA QUE PERMANECE',
        paragraphs: [
          'El resultado es una identidad que no solo se observa, sino que se percibe. Un sistema visual capaz de generar sensaciones y dejar una huella emocional en quien interactúa con él. AURA no busca ser entendida de inmediato, sino experimentada.',
        ],
        italicQuote: 'Porque algunas cosas no se explican, se sienten.',
      },
    ],
    nextCaseId: 'lumen',
    nextCaseTitle: 'Maison Vesper',
    nextCaseSubtitle: 'Rebranding y Arquitectura de Fragancias • París',
    stats: [
      { label: 'Impacto', value: '+184% Engagement' },
      { label: 'Reconocimiento', value: 'Red Dot Best 2025' },
      { label: 'Tipografía', value: 'Bodoni Moda & Custom Sans' },
      { label: 'Equipo', value: 'Nexuss Studio Global' },
    ],
  },

  lumen: {
    id: 'lumen',
    caseNumber: 'CASO 02',
    categoryTag: 'HOSPITALITY & NOCTURNO',
    title: 'LUMEN',
    subtitle: 'En la penumbra de la noche, donde el exceso de ruido distorsiona la experiencia, la intimidad se convierte en el máximo lujo.',
    heroManifesto: 'En la penumbra de la noche, donde el exceso de ruido distorsiona la experiencia, la intimidad se convierte en el máximo lujo.',
    heroManifestoItalic: 'la intimidad se convierte en el máximo lujo.',
    heroDescription:
      'Lumen nace como un santuario para los sentidos: cócteles botánicos de autor, iluminación cálida de ámbar y un diseño acústico que invita a la pausa y a la conversación genuina. Una identidad de hospitalidad que ilumina desde la sutileza.',
    meta: {
      client: 'LUMEN BAR & LOUNGE',
      discipline: 'ESTRATEGIA, BRANDING, ARQ. DE MARCA',
      year: '2024',
      location: 'MADRID • SALAMANCA',
    },
    themeColor: '#232323',
    themeTextColor: '#ffffff',
    gallery: [
      {
        tag: '01 • ARQUITECTURA ESPACIAL & ATMÓSFERA DE ÁMBAR',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_tduNqJizNaK2f8R9tupEeC5le16sILvrZQUUAG3UOWwnFhQsz6m0_Yl3GZ_lBrHHygLiKcouPwtwLys5DyOF-uo3v-VS80vwszeqfXeTz5R-23Wy4mNQU87Ghi88-8_fzY-PkppPa20jv5mzo3TCoUdaYEv-GsT-JjUFxEGWg-TL-2mzTJzqdtl7N7xjf9eGDp7PmbC0NtlShcP_EHJkRTIHlkQ-GupzHQ_hUUHXMHQchq0GPYymDg',
        alt: 'Cinematic architectural interior photography of Lumen luxury nocturnal cocktail bar in Madrid with glowing honey-amber halo sconces',
        aspect: 'aspect-[21/9]',
      },
      {
        tag: '02 • EDITORIAL DE COCTELERÍA & CUERO',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCDBezxcGId146nOI0rchWzEk-W1HsgpMXllJKGaXLpiaU94-yR_ssORI5ZyHc1Nd_dYa2dujr4f2_KqPqT-TjMvS_eiKgtLmWu3Bs7iVTA3cG2s30HhiqZGIDlSqPiYKH9uxayMDiAIy2kAQH0vz9cVUdHahtJmzhwC51EvKz_fVI12P97IfA0NBtnKvkmsB-tDDx4GN1XVWRTdPaHyJpi0Td4n0yBDLQVG1DPuBZnfTkVW2Mx7xPbQ',
        alt: 'Editorial still life photograph of Lumen luxury cocktail menu bound in vegetable-tanned supple black saddle leather',
        aspect: 'aspect-[4/3]',
      },
      {
        tag: '03 • CRISTALERÍA & MONOGRAMA LÁSER',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQ_vBIsLBi4OE9NuMuUNSzDY2QP2W01-MBf7OoBzCMfI95NPwHB3sCJgfk7_sw2NdfQJRD3ksaF-9ITmpqCrv0sMt15tiGdad6cKyPTImgixgMJwk2yl70BOiKx4b7tP89Y_gsNHu-yRvbqLXfibH8cmrdoKlU46G230L-Rmq-GxKa3ITqPFi6tUdpftVhVW_nu7L6GVWH2xJ0tvXpIPjOosPbHP4ZuwjBYLq8F08srW0ko5v7zW48hg',
        alt: 'Close-up macro editorial photo of bespoke cocktail glassware with subtle geometric monogram laser engraving',
        aspect: 'aspect-[4/3]',
      },
      {
        tag: '04 • SISTEMA DE POSAVASOS EN ALGODÓN 600G',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_T8cI_cATpF5FvVBy7f2O0mj-muXTqleudasmMaYNNAe9kBGiqnz3B7o7-zNvjvSrFKYboEhs9vHYsvqQRZaQNm9Cyrs9RvmPOnWVqTuL-v96Nfnv1uSImZtNZd9VglEtn475qKh-yhUtmluP3bAPWNDxeYKloghVDGBJr1Mx6-eoXup_9MXs9hszJ7l1k4FXHW9hCkxyqRyewUSv4Abgq0SDotwa6ZRGsuM9r_izSjnoshD5JOiKbQ',
        alt: 'Flat lay photograph of circular heavy debossed cocktail coasters on thick textured cotton paper in shades of charcoal and raw ecru',
        aspect: 'aspect-[3/4]',
      },
      {
        tag: '05 • SEÑALÉTICA EN LATÓN ENVEJECIDO',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmEC5BAbQdNkPvIEPucm-D-bouNd-T-OYkBPoVU2nmkKwUnpaOmOU6Wwd8SNfaqmPpqYjYvf4m8nJbSZoK5obtQ3SDaJAkns-N1MvOIhkJPgfnBLE6p4nWvQJIyNr-pUwRnsnc6IsSbvcr5uYmUx6b6LKBwpa2EreiJEee-4dRGmiFdc8J7WHN4MK6DxcTLEgzbI-hzHmSm6D1pYjoqshBIKvJjgvJ69zU7XZ09N4jp7ZB7ydGJWk_Aw',
        alt: 'Architectural photograph of sleek brushed blackened brass entrance plaque for Lumen lounge with warm rear halo backlit letterforms',
        aspect: 'aspect-[16/9]',
      },
      {
        tag: '06 • SUITE GRÁFICA & OBJETOS DE MESA',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpKXntkVsEw_3ixFde9aO4nSej0FWrpry1EwSDlpWbWd6cJPdGQesLN3oWSfeeQw2hmO3Q7XU_GHZ0jY2TH5BGU9-eaeYOfcbupmngfJ-BGaWHRR02pAdoj7g8uUFEQgy5rkPvA0Eva41lqP2KFDvyNtCvhgokmVmlYrf8zRQsEpIbUr0nsOGYWK0PFm1lU0RrLZvc8b5zEBJgfrQsd26dgAoo-__iJILp3WAYlpCFQEkAjt7aGUep0A',
        alt: 'Curated graphic branding laydown for Lumen hospitality concept. Brand guidelines book open to typographic layout, business cards with gilded gold edges',
        aspect: 'aspect-[16/9]',
      },
      {
        tag: '07 • ALQUIMIA BOTÁNICA EN DESTILACIÓN',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfmscnkdgs8IlMAzaXwnG1-X1x1lTAKXg6KxnE1rjsrYMyWiBMRw_rPCZBnofD-RNpUsaVY9TRTMFidsXl4A2IichGcWaevvpv5GNLrQPVhHDVD7UNs0pGah3kV9LbyKTpBsxuBJLGVytsOTXRJTqijHqTNavhSRy5WeG9GF4jFC3RVt3AP0eHBpu4CzfXShGawO-si0WdtjYLIHlnNEIbDPaYYA3yHoR22rxuX9ADiJ85K4tAkep_qQ',
        alt: 'Botanical ingredients distillation and dark amber glass bottles in Lumen speakeasy lab',
        aspect: 'aspect-[4/5]',
      },
      {
        tag: '08 • PALETA NOCTURNA & METALES CÁLIDOS',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0n511VgbG9Y7Mx3Fw3lmGtLtkwhI-5EMYscviIT8vdVJW7s2qMfrVmzDHjMlSGKz9bASUTHrXs3SuGI5GLGv9oNIUJxt6VtePDPUupYsMPjCSs4Ll4mF8WF_a6EdGsqa6CMJ_cYLsYJLKd3qkoN0G5NpPZGzTEUW3HN3DrdneigDIY5Uw2xFWhZWLr4zyqxCclkfWMyxFNkJz9pOd6p0xVNHW9UzwOBLKCWj-CaGiHvYgNSaSRSzZcQ',
        alt: 'Curated material textures and ambient warm light samples of Lumen identity',
        aspect: 'aspect-[4/5]',
      },
      {
        tag: '09 • SANTUARIO NOCTURNO INSIGNIA',
        title: 'Donde la penumbra se convierte en santuario.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_tduNqJizNaK2f8R9tupEeC5le16sILvrZQUUAG3UOWwnFhQsz6m0_Yl3GZ_lBrHHygLiKcouPwtwLys5DyOF-uo3v-VS80vwszeqfXeTz5R-23Wy4mNQU87Ghi88-8_fzY-PkppPa20jv5mzo3TCoUdaYEv-GsT-JjUFxEGWg-TL-2mzTJzqdtl7N7xjf9eGDp7PmbC0NtlShcP_EHJkRTIHlkQ-GupzHQ_hUUHXMHQchq0GPYymDg',
        alt: 'Lumen flagship sanctuary bar room interior with atmospheric low lighting and warm shadows',
        aspect: 'aspect-[21/8]',
      },
    ],
    storySubtitle: 'Decodificando el relato del proyecto',
    storyDetails: [
      { label: 'Fase', value: '01 — 06' },
      { label: 'Enfoque', value: 'Hospitality' },
      { label: 'Duración', value: '14 Semanas' },
    ],
    stories: [
      {
        number: '01',
        title: 'EL PODER DE LA PENUMBRA',
        paragraphs: [
          'Diseñar una marca que cobra vida cuando el sol se oculta exige comprender que la luz no debe imponerse, sino guiar. En Lumen, la identidad visual no lucha contra la oscuridad del espacio: se funde en ella. Estudiamos las curvas lumínicas nocturnas y las transiciones del atardecer para concebir un universo donde el contraste sutil, los reflejos tenues y la calma visual sustituyen al estruendo habitual de la vida nocturna metropolitana.',
        ],
      },
      {
        number: '02',
        title: 'MATERIALIDAD & CONTACTO',
        paragraphs: [
          'Cada punto de contacto físico fue seleccionado bajo premisas de calidez y peso específico. Optamos por papeles de algodón texturizado de 600 gramos con acabados en bajo relieve, cueros de curtición vegetal con bordes sellados a mano y estampados en oro mate de baja reflexión lumínica.',
        ],
        italicQuote: 'La carta de cócteles es una invitación al tacto pausado antes del primer sorbo.',
      },
      {
        number: '03',
        title: 'ATMÓSFERA COMO IDENTIDAD',
        paragraphs: [
          'El branding contemporáneo de hospitalidad trasciende el logotipo para convertirse en atmósfera total. Desde la cuidada calibración acústica de los paneles de madera ranurada hasta la temperatura cromática de las luminarias personalizadas (2200K), cada decisión ambiental obedece al sistema gráfico de Lumen.',
          'La experiencia inmersiva del visitante es, en última instancia, el verdadero logotipo de la casa.',
        ],
      },
      {
        number: '04',
        title: 'ALQUIMIA Y CALIGRAFÍA',
        paragraphs: [
          'El menú se estructuró a modo de grimorio botánico, clasificando las bebidas según notas sensoriales y horas de la noche. La tipografía combina trazos de alto contraste con glifos personalizados que evocan fórmulas alquímicas.',
        ],
      },
      {
        number: '05',
        title: 'SILENCIO VISUAL EN LA METRÓPOLI',
        paragraphs: [
          'En un sector dominado por pantallas luminosas y saturación cromática, Lumen optó por el silencio visual: señalética mínima en latón oscuro, bajo relieve ciego y sombras envolventes.',
        ],
        italicQuote: 'Más que un bar, Lumen es un refugio contra la velocidad del mundo.',
      },
      {
        number: '06',
        title: 'UNA HUELLA QUE PERMANECE',
        paragraphs: [
          'El resultado es una marca que rehúye las tendencias efímeras de la coctelería para inscribirse en el canon de los templos clásicos europeos, reinterpretada con sensibilidad moderna. Lumen no persigue la viralidad estridente; busca la fidelidad cómplice de quien valora el arte de conversar a media luz.',
        ],
        italicQuote: 'Porque el verdadero lujo nocturno se mide en calma y complicidad.',
      },
    ],
    nextCaseId: 'botanica',
    nextCaseTitle: 'Botanica',
    nextCaseSubtitle: 'Bebidas Botánicas & Packaging • Valle Sagrado',
    stats: [
      { label: 'Impacto', value: '+142% Afluencia' },
      { label: 'Reconocimiento', value: 'Restaurant & Bar Design 2024' },
      { label: 'Tipografía', value: 'Editorial New & Neue Montreal' },
      { label: 'Equipo', value: 'Nexuss Studio Iberia' },
    ],
  },

  botanica: {
    id: 'botanica',
    caseNumber: 'CASO 03',
    categoryTag: 'BEBIDAS BOTÁNICAS & PACKAGING',
    title: 'BOTANICA',
    subtitle: 'La tierra no necesita artificios, solo reverencia y maestría en la destilación.',
    heroManifesto: 'La tierra no necesita artificios, solo reverencia y maestría en la destilación.',
    heroManifestoItalic: 'y profundamente conectados con su origen.',
    heroDescription:
      'Botanica redescubre botánicos nativos y recetas ancestrales para concebir elixires puros, sostenibles y profundamente conectados con su origen. Un diseño de packaging que rinde homenaje a la botánica viva y al trabajo minucioso de pequeños recolectores locales en parcelas regenerativas.',
    meta: {
      client: 'BOTANICA SPIRITS CO.',
      discipline: 'PACKAGING, IDENTIDAD VISUAL, DIRECCIÓN DE ARTE',
      year: '2024',
      location: 'VALLE SAGRADO • LIMA',
    },
    themeColor: '#E5D8C9',
    themeTextColor: '#252525',
    gallery: [
      {
        tag: '01 • GAMA DE LICORES BOTÁNICOS 750ML',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_T2flTQKWgBPwVAf2cK20ZqNgYsHY9JMrJEn7LtYREHJMmYVqWq_6IEZWtFO15_GwqZp-eUV3NUVUYMnxFVmhU3bgR6Q93WAcGUQTloSfYmlIiorsgsDipIRX7eRpOmiShmS5AoAiSPnZyLiNJ_qdZpvvR4w_SrvijJL7i1Dubj9LAsIbTbeYa4L-7CaOT6Gzbryg-heizSkb1JAMivO3vojIrKZ92Kr9gYMS2fxzPqWO3LkA5QHosQ',
        alt: 'Overhead flatlay composition of artisanal amber glass apothecary spirit bottles labeled Botanica, set on natural warm linen textile',
        aspect: 'aspect-[21/9]',
      },
      {
        tag: '02 • SELLADO EN CERA & TIPOGRAFÍA SERIGRÁFICA',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA552M-cFswwK_PoWzGkyaO3493DxubVZAvq9hI1FBxrc5WfiL2D4k2_hQYlO6EJn0lrQ4Cpy9WnuzplsYMmg77rGr6nQJ0oueST1tPy7lAuY57gjuH08twjX8SimP-wAue70RxcT13tD9oRIyGCcPZrQFcExLmnprn5iomlb_ik-P7nbYK8poJSRSC-pwP1QleGX7ll4Afed2MsYRLDuJbCN2uMvc4wvVJHqSiSBwR83j_1rtlaOg8Kw',
        alt: 'Close-up macro photograph of a heavy amber glass spirit bottle showing intricate silk-screened typography',
        aspect: 'aspect-[4/3]',
      },
      {
        tag: '03 • ESTUCHES EN MADERA MACIZA GRABADA',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEXkI6aY0zj-8NHZ_GMAyyX0dO-8N9uMpWHj0zIuxgkgzbsKGjKRvVQn3jefcUCtN_ULvol0vbikUezGV9VTj2eZx0IsE2mQt1eTDOhL5AuY5pgtZwkd57R-LT__0I_wWpV49Wu9j5VNpwxw6IaD5PsopnI1H6WvdD7o-uibPRwiEg21bfanVs9togcjpdcx5G9BBuaRaKcvrAvJ5FuHWYeCYd3_827b-GcH0Jte4sxNWgL1tTT2unyQ',
        alt: 'Editorial still life of solid pine wooden presentation cases engraved with laser heated botanical stamps',
        aspect: 'aspect-[4/3]',
      },
      {
        tag: '04 • ILUSTRACIÓN CIENTÍFICA DE HERBOLARIO',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPRKlwlMvX61iyGN5W1rNYkj9YjAFNFl6-7NSlEhl7JtXSFYOg1P4GokHitWPIbSfb0NAfB2330FeQtGO-jNN0XVGKjjSUC_cKS67SyW_4Nu0kqQnkWpvJTRQCPDkAbXn4FynMztkmw3exNIa5PWuEpLJkETihRD_La5Hc7vG3JnR9rIxnab6-zH6B2P6y74TJgNRENLpEd3c5hfCptvEwD1tYn2wnx3XpSF5im5sYkLtADsA1lVgAkg',
        alt: 'Archival vintage botanical plate illustration of Angelica archangelica and wild Andean herbs',
        aspect: 'aspect-[3/4]',
      },
      {
        tag: '05 • PROCESO EN ALAMBIQUE DE COBRE',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5XwjolhILapviuAYY3grBXtIJk0ADloi5SRxOFy0uN5rM8pKoTj5bVWyh1dYMFCw5kQRV_0jhP6NTKNwBCJqzqDiV5YOAo0ZKFU1uM-bunlfZvEXgaHlFRzRmvNJba7tsiklxczm-yjt83L0yGOQu-WkgckIwm0aJszT0iqr7_Bcvaid6PLCkkaMJY7RcjqKDFlSK137F7k5jjtzKjvS3K_giAjrKNUUliDVDm6hbygCWJoBxde7DKQ',
        alt: 'Artisanal distiller hands pouring clear botanical gin through a glass funnel into heavy decanters inside copper alembic room',
        aspect: 'aspect-[16/9]',
      },
      {
        tag: '06 • PAISAJE DE COSECHA & ORIGEN ANDINO',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD89AwQKCdNPTIBOsV840yknCGL6JEfUsYdO5PWXPvcN4FCy-bcXZDkIEhnlVBcw5i_AknKSt6I3AILG5y1YiJQRgYI1tamUE3ePSzAXnrG4nD5HxxlOH7mRxp5sROeY7B604ozm4dGBDXI6ZaQVcv4bIEn-7qRHP1U7c1uUL4ZafRJXxMSR4-C4uWFLggKNF4SmcfH2rWgXI1jqbOPcuJZBWU0dSDyirdwalNYM5Cihj8UwossISaqIA',
        alt: 'Atmospheric landscape shot of mist-covered high-altitude botanical reserve in the Sacred Valley',
        aspect: 'aspect-[16/9]',
      },
      {
        tag: '07 • TRILOGÍA DE LICORES EMBOTELLADOS',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAboUkmB3f2hDk5OFysR92-Bjp4KRA0M60aP7S1-a5hs_HimFRR30NgInSmI6iJjUipURqwGQnehPB88Wh43RHMotsojOQKIRDYW8D-by4e5Y9Gxbtlo62NqQ5ceAfgswXP-5L6kHQyEwSgx-QruhHV6nIyucmAsxglM2YhImdtCscytSaS_pAa7ro0eufzygnSZl38A2ALNMC5l_s1tkyEq3t_P6e6f6EKr0e2QOHEGBveM9SS10hHQQ',
        alt: 'Collection of three custom heavy glass spirit flasks aligned in minimalist luxury bar setting',
        aspect: 'aspect-[4/5]',
      },
      {
        tag: '08 • EXPERIENCIA COMPLETA DE DESEMBALAJE',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHCjQmm0MJOAw9Q-4wIj_88OqUO5jPA5tulFz_QgCQf88r1y6iihUdjlTprddCxDe-35eAfq7ZpeyRgPyuiEI3-TGESTG1O5xPEk3tPUN35AnXN5xK8MRUMph1q1HTg9yyiCECHPNg_MTbb6zNM_2Xc4QGfVVw368lzYhTB3hUnm1bBX6feQD2kwEeFPMW5siYhBT3SNKtJ61QbjlRHUhvl3PKNfNT9nMpjVvIspAu-4iWFPiiK1bzdg',
        alt: 'Panoramic studio photograph of unboxing the Botanica Prestige edition: custom debossed cloth presentation case',
        aspect: 'aspect-[4/5]',
      },
      {
        tag: '09 • DESTILACIÓN & MATERIA VIVA',
        title: 'Donde la tierra se transforma en elixir perdurable.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_T2flTQKWgBPwVAf2cK20ZqNgYsHY9JMrJEn7LtYREHJMmYVqWq_6IEZWtFO15_GwqZp-eUV3NUVUYMnxFVmhU3bgR6Q93WAcGUQTloSfYmlIiorsgsDipIRX7eRpOmiShmS5AoAiSPnZyLiNJ_qdZpvvR4w_SrvijJL7i1Dubj9LAsIbTbeYa4L-7CaOT6Gzbryg-heizSkb1JAMivO3vojIrKZ92Kr9gYMS2fxzPqWO3LkA5QHosQ',
        alt: 'Botanica spirits collection in warm ambient lighting showcasing full branding harmony',
        aspect: 'aspect-[21/8]',
      },
    ],
    storySubtitle: 'Respeto al ciclo botánico y depuración formal.',
    storyDetails: [
      { label: 'Fase', value: '01 — 06' },
      { label: 'Enfoque', value: 'Packaging & Sostenibilidad' },
      { label: 'Duración', value: '16 Semanas' },
    ],
    stories: [
      {
        number: '01',
        title: 'ORIGEN Y MATERIA PRIMA',
        paragraphs: [
          'En un mercado colmado de destilados sintéticos e identidades impersonales, Botanica nace con una premisa innegociable: honrar el ciclo botánico de la tierra. Cada infusión procede de cosechas silvestres sostenibles, recolectadas a mano por comunidades locales que preservan el conocimiento medicinal de las raíces nativas.',
          'El reto visual exigía escapar del cliché rústico para formular un lenguaje de lujo consciente, austero y sensorialmente inolvidable.',
        ],
      },
      {
        number: '02',
        title: 'GRABADO BOTÁNICO Y RIGOR CIENTÍFICO',
        paragraphs: [
          'Rescatamos la precisión de los tratados botánicos ilustrados del siglo XVIII, trabajando mano a mano con grabadores para tallar en cobre cada especie recolectada: la genciana silvestre, el enebro de montaña y la salvia de páramo.',
          'Estas ilustraciones no actúan como simples adornos, sino como certificaciones visuales de pureza orgánica que conviven en equilibrio con una tipografía sobria, geométrica y de trazo nítido.',
        ],
        italicQuote: 'La precisión botánica no decora el packaging: valida su origen auténtico.',
      },
      {
        number: '03',
        title: 'EL RITUAL DE APERTURA',
        paragraphs: [
          'Descorchar un licor no debe ser un gesto ordinario, sino la antesala de un diálogo sensorial. Diseñamos un cuello revestido en cera de abeja natural sin aditivos que se rompe suavemente con un cordón de cáñamo, liberando las notas aromáticas antes de la primera gota.',
          'El peso del vidrio ámbar de alta densidad y el tacto poroso del papel de fibras de algodón 100% reciclado completan una experiencia donde cada milímetro ha sido pensado para perdurar.',
        ],
      },
      {
        number: '04',
        title: 'SOSTENIBILIDAD TANGIBLE',
        paragraphs: [
          'Eliminamos el uso de tintas plásticas y barnices UV en favor de serigrafías al agua y estampados térmicos sin residuo tóxico. Las cajas de almacenaje se construyen con madera de pino de tala responsable, grabadas con calor para prescindir de tintas secundarias.',
        ],
      },
      {
        number: '05',
        title: 'ARMONÍA ENTRE ANCESTRAL Y MODERNO',
        paragraphs: [
          'La identidad dialoga entre el respeto al legado andino y la estética del diseño editorial europeo de vanguardia. La paleta cromática bebe de arcillas minerales y tonos musgo.',
        ],
        italicQuote: 'Diseño ético que devuelve a la tierra lo que de ella se toma.',
      },
      {
        number: '06',
        title: 'UNA IDENTIDAD QUE TRASPASA EL OBJETO',
        paragraphs: [
          'El resultado es una marca que no solo se reconoce en una barra de alta coctelería en Londres o Ciudad de México, sino que narra con honestidad el paisaje de donde proviene. Una oda a lo salvaje, depurada por la mano experta del diseño contemporáneo.',
        ],
        italicQuote: 'Porque la verdadera pureza botánica no se finge, se saborea.',
      },
    ],
    nextCaseId: 'aurora',
    nextCaseTitle: 'Aurora: Haute Joaillerie & Ceramica',
    nextCaseSubtitle: 'Atelier Artesanal • Mallorca',
    stats: [
      { label: 'Impacto', value: '+210% Ventas Directas' },
      { label: 'Reconocimiento', value: 'Pentawards Gold 2024' },
      { label: 'Tipografía', value: 'Ogg Roman & Favorit Mono' },
      { label: 'Equipo', value: 'Nexuss Studio Américas' },
    ],
  },

  aurora: {
    id: 'aurora',
    caseNumber: 'CASO 04',
    categoryTag: 'DISEÑO ARTESANAL & OBJETOS',
    title: 'AURORA',
    subtitle: 'Cada curva imperfecta guarda la memoria de las manos que moldearon el barro.',
    heroManifesto: 'Cada curva imperfecta guarda la memoria de las manos que moldearon el barro.',
    heroManifestoItalic: 'wabi-sabi',
    heroDescription:
      'Aurora Ceramics celebra la calma, la imperfección orgánica del wabi-sabi y los objetos concebidos para habitar hogares con alma. Una identidad de marca que transmite serenidad táctil, textura terrosa y una belleza que madura con el tiempo.',
    meta: {
      client: 'AURORA ATELIER',
      discipline: 'IDENTIDAD, DIR. ARTE, E-COMMERCE',
      year: '2024',
      location: 'MALLORCA • MADRID',
    },
    themeColor: '#DFE1A6',
    themeTextColor: '#1b1c1a',
    gallery: [
      {
        tag: '01 • COLECCIÓN ESCULTÓRICA EN GRES MINERAL',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtyCLDxTgIm0z9iKNZMqP6btwy10yf0E5DDeOWnpLnp2ltxF_jmsGCxFghz6uwW5-wy-GNEdhb6vuLdXSRPmFzCcj-VsMZuksF2E2bC6R0vIK1IIQDLOYZ1MOZSG4Jt0lqAS1egSuwNTTHqf3i_X0cOoRhzdP-7BNpeRheRReOMErad06zGtkSlKyG56M2-Ew7cvniRVfnfP27ILApTqylP-X-ZhaEklQ3wsbuy6MMAWkTd1CMOhqgSA',
        alt: 'High-end editorial photograph of handcrafted artisanal ceramic tableware and sculptural stoneware vases in warm earth and cream tones',
        aspect: 'aspect-[21/9]',
      },
      {
        tag: '02 • CRAQUELADO REACTIVO & TEXTURA MINERAL',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ1rqBZqNi_tXrUFxYSHmh5atBZSMtrSJd9oy9BpbAk5yYjkzqXm_51RTtZwNa4QTR6cbtG14K1jtEQHA2GehH-Uas7pLfScvWy-nikFNWX0Fro7zbW1tdsY8jBJOJhAXyOoTiOjFUSZQemU9l6SGIKSVkqdjRBZEaMax7bGW-D5MKtDaTNqU24PEfedwhoQcmCXJvLRYD8gm7JRVp26AJxy1ZAoYwn3O0wby_LgREWiIs3mwNE-4iew',
        alt: 'Macro close-up shot of hand-thrown raw stoneware pottery displaying subtle reactive glaze crackles',
        aspect: 'aspect-[4/3]',
      },
      {
        tag: '03 • PACKAGING SOSTENIBLE EN FIBRAS DE CÁÑAMO',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbhOxENiLGilgCIWwhfJ0LwIcaYyQ-z8CLDgkGlqsaLg1N0KWejhq8290y9luHt2NbKtk2_okOC50uHJMEy44h9uuyauOdeHkrM-s-81C9Wbol8xjC2VIB0NxMEEbXbTWeDUFaVgTTpfNKAFHpWbYH_XbrzNmWdZYs391oIAwVOwaUJ3tqHMa2hztUJtHYKYVMbBCsuhymtvJOuD1c1sIZDnmuEEDvG3PeDrcg6UcDQVfNRr-O52KdkQ',
        alt: 'Minimalist sustainable luxury packaging suite for Aurora Ceramics featuring unbleached raw kraft cardboard boxes',
        aspect: 'aspect-[4/3]',
      },
      {
        tag: '04 • SELLO DE AUTOR EN BAJORRELIEVE',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCm2Q9pw2kay7Y9JLDh_p66qhwdJ4ceYbGE3mjI_t529r-518NgFNfD-ZhMCHZ5Ei6vn4V6IjMDrv2EV3QUsQIF_A15AwxbcaGXZ670rfWRxBA8x_cJIvjucBxe4k9HQmFNpo6GKV55y5PUeOR3_TGgcKOiUnJJv7NDpdJIsZGdCnig0VM0R6AbqYAXfGCnQLy_kOdbvSRhUvYqupALu4FJ6ulRE_JVGTH6KCkNEXj-4IBQMTTGF9G19Q',
        alt: 'Editorial still life showing the unglazed underside of an artisan ceramic bowl with a clean blind-debossed minimalist monogram chop seal',
        aspect: 'aspect-[3/4]',
      },
      {
        tag: '05 • MONOGRAFÍA IMPRESA & CATÁLOGO DE TALLER',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4g9hLiiv6Mj1BIR0XIjWTRLLYJYd8cun8PblFObFKk8zrRfq3u9CzOTzcOHXA_DK164e50f1wpIL8IdGzdEwm3awx5HwuSPrPzd7btwNQvwQexoogVPT9y8huWncxeN6MV8h29zQ99DKP9GavkluUW29EUyZfmHCQmzESAADJYIgP2atkW8TaTk2rayRg12bWHvp5QCwrzzc8XWeS92fiLaQqxi51HkvqOpXT0lCGyhIbwXLavSAZDA',
        alt: 'Editorial photograph of an open printed monograph catalog for Aurora Ceramics, resting on a raw linen tablecloth',
        aspect: 'aspect-[16/9]',
      },
      {
        tag: '06 • TALLER ALFARERO & LUZ DEL MEDITERRÁNEO',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCd6PHzq0MWwwUVEjDlTJy_GhL_pVKJBA8VXGDgAQkyhE_-G28RMEz-fBk4SDUcNd9oVAxciYRSisWk2CnL-oPKTL6pd7V61FCkN-L0qoqOFkQu6Fb6MPlhnJywcLJ7sEsgsqQSlpSD1rLVdwmSrZuqNwp7gFsZ3Y6QKXpzxkjTjWJm9EWWlcLO0ATNckT9Gz7vJ_WAJCbJvLtzV83uudQSV_lNJHx_gqqJqgKSYtIHAS1LF32JsVGhzw',
        alt: 'Wide serene panoramic shot of the Aurora Ceramics studio workshop with natural timber shelving displaying curated batches of drying terracotta vessels',
        aspect: 'aspect-[16/9]',
      },
      {
        tag: '07 • ESMALTADO A MANO & HORNEADO DE ALTA TEMPERATURA',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAv6Mumqpw2tGJMCU58KQbq-pLHFemCatNKuzy7udQ1X6qIYLpRCFeYHLzyQGYWfLv4LIWla-TX1s2ns3QsyjxyGX6z6RohcgvcNJTrvIMbSMj8j8wYLH9jVE4fsqoRDN3P_smiyyrj97fCtFB_aMGznTq2sbDhPpISNR3x0BYJikam1iMAa1XMHBsAaxBlHS0Nfb3nCwH-KSBACLIDkcbAWqqcW0YaBXBh3oqlhJq4THed2SifnCqz1w',
        alt: 'Close-up of artisan potter hands applying raw mineral glazes on sculptural ceramic vessels',
        aspect: 'aspect-[4/5]',
      },
      {
        tag: '08 • CURADURÍA ESCULTÓRICA & LUZ CENITAL',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc3f7_HzR8KXYEAhZQavmtzSlKolfyMHbWrO3dHfnCES4u2VsQ9o8vamDk9GNEVRr-t_OBKFQvIc7Xi9h6WsohSrFEY-Vf4XlAC6WclehUmKN_enWt1xrhBo_4Z23RJ_Z6zwlzZlYdXql23wqACUjy7ONkKqc8ymtrLHhPYjeZFeoXD0BWTxFH1PFotFMbytLwgiGH8P4nr4KsZgx8o5RusnL-EoJuidYEzuWRN3iKzvyga8bbDn9jHw',
        alt: 'Curated gallery setting with ceramic pieces basking in Mediterranean sunlight',
        aspect: 'aspect-[4/5]',
      },
      {
        tag: '09 • ATELIER INSIGNIA & FILOSOFÍA SILENTE',
        title: 'Donde la materia viva encuentra su silencio.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtyCLDxTgIm0z9iKNZMqP6btwy10yf0E5DDeOWnpLnp2ltxF_jmsGCxFghz6uwW5-wy-GNEdhb6vuLdXSRPmFzCcj-VsMZuksF2E2bC6R0vIK1IIQDLOYZ1MOZSG4Jt0lqAS1egSuwNTTHqf3i_X0cOoRhzdP-7BNpeRheRReOMErad06zGtkSlKyG56M2-Ew7cvniRVfnfP27ILApTqylP-X-ZhaEklQ3wsbuy6MMAWkTd1CMOhqgSA',
        alt: 'Full panoramic view of Aurora ceramic studio atelier with natural materials and timeless grace',
        aspect: 'aspect-[21/8]',
      },
    ],
    storySubtitle: 'Una narrativa moldeada entre tradición alfarera, cadencia contemporánea y rigor editorial.',
    storyDetails: [
      { label: 'Fase', value: '01 — 06' },
      { label: 'Enfoque', value: 'Artesanía & Wabi-Sabi' },
      { label: 'Duración', value: '12 Semanas' },
    ],
    stories: [
      {
        number: '01',
        title: 'LA BELLEZA DE LO IMPERFECTO',
        paragraphs: [
          'En un entorno donde la uniformidad industrial despoja a los objetos de emoción, Aurora nace como un homenaje a la paciencia. Cada pieza se moldea en tornos manuales y se hornea una sola vez a alta temperatura, permitiendo que el esmalte reaccione de forma irrepetible con los minerales del gres.',
          'El proyecto no persigue la perfección geométrica, sino el instante exacto en que la mano deja una huella irremplazable.',
        ],
      },
      {
        number: '02',
        title: 'TEXTURA COMO VOZ',
        paragraphs: [
          'El sistema visual y tipográfico adopta la misma tensión poética del barro crudo: contrastes de alta costura tipográfica mediante serifs escultóricas combinadas con cajas sans-serif de estricto orden suizo.',
          'La papelería utiliza residuos de algodón reciclado y fibras de cáñamo, traduciendo al tacto editorial la experiencia táctil de tocar una vasija recién salida del horno.',
        ],
        italicQuote: 'Cada textura evoca el calor de la tierra y la serenidad del fuego.',
      },
      {
        number: '03',
        title: 'HABITAR EL ESPACIO',
        paragraphs: [
          'La plataforma digital y el unboxing fueron coreografiados como un ritual de transición: desde la fotografía cenital de bodegones silenciosos hasta las cajas selladas con cera vegetal y notas caligrafiadas numeradas.',
          'Aurora no vende vajilla ni jarrones ornamentales; propone una desaceleración consciente del acto cotidiano de sentarse a la mesa.',
        ],
      },
      {
        number: '04',
        title: 'LA HUELLA DEL TIEMPO',
        paragraphs: [
          'Los objetos de Aurora están diseñados para envejecer con nobleza. Las pequeñas pátinas que el uso cotidiano imprime sobre el esmalte no devalúan la pieza, sino que enriquecen su historia personal.',
        ],
      },
      {
        number: '05',
        title: 'DIRECCIÓN DE ARTE MONOCROMÁTICA',
        paragraphs: [
          'Las sesiones fotográficas se concibieron bajo luz natural mediterránea indirecta, suprimiendo cualquier artificio lumínico para que los tonos cálidos del gres y la porosidad del barro sean los únicos protagonistas.',
        ],
        italicQuote: 'Menos artificio, mayor resonancia emocional.',
      },
      {
        number: '06',
        title: 'UNA PIEZA, UN REFUGIO',
        paragraphs: [
          'El resultado final trasciende el catálogo comercial para constituirse en un manifiesto por la vida sosegada. Cada elemento de marca transmite la serenidad de quien entiende que las cosas verdaderas requieren su propio tiempo para madurar.',
        ],
        italicQuote: 'Porque habitar con calma es el mayor acto de diseño.',
      },
    ],
    nextCaseId: 'aura',
    nextCaseTitle: 'Aura — Identidad Sensorial',
    nextCaseSubtitle: 'Packaging & Rebranding • Barcelona',
    stats: [
      { label: 'Impacto', value: '+168% Retención' },
      { label: 'Reconocimiento', value: 'Craft Design Award 2024' },
      { label: 'Tipografía', value: 'Canela Fine & Söhne Mono' },
      { label: 'Equipo', value: 'Nexuss Studio Baleares' },
    ],
  },
};
