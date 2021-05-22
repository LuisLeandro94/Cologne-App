import { Injectable } from '@angular/core';
import { NotesEnum } from 'src/app/enums/notes';
import { SizeEnum } from 'src/app/enums/size';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor() {}

  items = [
    {
      name: 'Bad Boy',
      brand: 'Carolina Herrera',
      description:
        'Bad Boy representa os homens rebeldes que trabalham o seu próprio caminho e desenham os seus próprios princípios. O frasco é tão distinto quanto ele, um ícone surpreendente e inovador, símbolo da força heróica e da dualidade do homem Bad Boy.',
      image:
        'https://www.perfumesecompanhia.pt/fotos/produtos/8411061926093.jpg',
      size: SizeEnum.Small,
      notes: NotesEnum.Oud,
      price: '54,38',
      id: 1,
    },
    {
      name: 'Gentleman',
      brand: 'Givenchy',
      description:
        'Gentleman Givenchy revela a nova Eau de Toilette Intense, uma amadeirado floral aromático em que a doçura abraça a força.',
      image:
        'https://www.perfumesecompanhia.pt/fotos/produtos/3274872422995_1.jpg',
      size: SizeEnum.Medium,
      notes: NotesEnum.Patchouli,
      price: '58,13',
      id: 2,
    },
    {
      name: 'Sauvage',
      brand: 'Dior',
      description:
        'Sauvage é um ato de criação inspirado em espaços abertos. Um céu azul ozono que domina um deserto mineral quente e branco. O sopro cítrico que marca o eau de toilette Sauvage é poderosamente intensificado pela nobreza âmbar do ambroxan, do elemi resinoso e das madeiras harmonizantes. Perfeitamente reconhecível, o seu rasto assinatura impõe-se único* com a sua virilidade assumida. Como uma respiração intensa e fresca, o eau de toilette Sauvage é uma composição sem restrições para um homem autêntico e verdadeiro. Recarregue o frasco de eau de toilette Sauvage de 100 ml e de 30 ml com a indicação "RECHARGEABLE" na parte de trás (eau de toilette de 30 ml) ou na parte de baixo (eau de toilette de 100 ml) do frasco com a Recarga Sauvage de 300 ml. * Na Dior. "Para criar Sauvage, usei o homem como ponto de partida. Uma masculinidade forte e inconfundível. Como a imagem de um homem que transcende o tempo e a moda." François Demachy, Perfumista-Criador de Dior Os ingredientes de origem natural, selecionados com extrema exigência, são conjugados em grandes doses. As notas de topo radiantes explodem com a frescura sumarenta da Bergamota Reggio da Calábria. O ambroxan liberta um poderoso rasto amadeirado. Para Sauvage, François Demachy exigiu uma essência de bergamota Reggio de qualidade particular. Uma bergamota exclusiva criada em conjunto com os produtores locais para obter uma assinatura "à medida" para a maison Dior. Plena do sol da Calábria, é mais frutada e desenvolve facetas únicas, ligeiramente apimentadas e com raspas de frutos cítricos.',
      image:
        'https://www.perfumesecompanhia.pt/fotos/produtos/3348901520195_1.jpg',
      size: SizeEnum.Medium,
      notes: NotesEnum.Côco,
      price: '20',
      id: 3,
    },
    {
      name: 'Boss Bottled',
      brand: 'Hugo Boss',
      description:
        'O homem BOSS está preparado para ter sucesso: competitivo, determinado e ambicioso. Os seus rituais de preparação diária são determinantes para a sua busca pessoal do sucesso e BOSS Bottled tornou-se uma parte integrante da sua armadura diária. Confiante e contemporâneo: as linhas depuradas fazem de BOSS Bottled um clássico icónico e a personificação de BOSS contida numa fragrância. Aliando elegância e estilo, foi concebido a pensar no homem moderno. Vibrante, com notas frescas e sensuais, a fragrância irradia distinção, sofisticação e a pura alegria de viver. Equilibrado com uma nota de topo fresca e frutada, que se combina com um coração quente dominado pelo gerânio e acordes florais e picantes, aromatizados com uma subtil pitada de cravinho. Numa harmonia vibrante que reúne as madeiras de sândalo e cedro e o vetiver, a nota de base é incontestavelmente masculina. Agite as suas opções diárias com este clássico intemporal.',
      image:
        'https://www.perfumesecompanhia.pt/fotos/produtos/0737052351001.jpg',
      size: SizeEnum.Big,
      notes: NotesEnum.Maçã,
      price: '44,93',
      id: 4,
    },
    {
      name: '1 Million',
      brand: 'Paco Rabanne',
      description:
        '1 Million é a expressão de todas as fantasias masculinas. Incorpora o retorno da masculinidade extravagante.',
      image:
        'https://www.perfumesecompanhia.pt/fotos/produtos/3349666007891.jpg',
      size: SizeEnum.Big,
      notes: NotesEnum.Jasmim,
      price: '53,93',
      id: 5,
    },
    {
      name: 'CK One',
      brand: 'Calvin Klein',
      description:
        'Ck one, uma fragrância única, natural, pura, simples, mas sensual. ck one inspira e reflecte confiança na partilha com o próximo.',
      image:
        'https://www.perfumesecompanhia.pt/fotos/produtos/0088300607402.jpg',
      size: SizeEnum.Small,
      notes: NotesEnum.Almíscar,
      price: '38,06',
      id: 6,
    },
    {
      name: 'Acqua di Gio Homme',
      brand: 'Giorgio Armani',
      description:
        'Acqua di Giò de Giorgio Armani está em perfeita harmonia e parece fazer parte da natureza. O perfume capta a energia do mar conferindo-lhe força e vitalidade. Um perfume que expressa o mundo subaquático e a água salgada muito suave e Mediterrânica. Leves nuances aquáticas fundem-se com fragrância de jasmim, alecrim, caqui frutado e patchouli indonésio para criar uma fragrância masculina que é ao mesmo tempo fresco e sensual.',
      image:
        'https://www.perfumesecompanhia.pt/fotos/produtos/3360372058861.jpg',
      size: SizeEnum.Small,
      notes: NotesEnum.Patchouli,
      price: '41,25',
      id: 7,
    },
    {
      name: 'K By Dolce Gabbana',
      brand: 'Dolce & Gabbana',
      description:
        'K by Dolce&Gabbana Eau de Parfum baseia-se no legado da Eau de Toilette com uma fragância sensual que encarna o espírito de um homem que escolhe o seu destino com paixão e confiança. Este perfume revigorante apresenta uma combinação de madeiras quentes e especiarias sensuais. Uma fragrância masculina que revela uma base amadeirada forte aprimorada pela madeira Nagarmotha que continua com notas quentes de cardamomo e uma pitada de essência de pimento. Uma mistura nobre que termina num toque subtil e cremoso de leite de figo para um perfume masculino amadeirado, inesquecível e intrigante. Descubra uma fragrância vibrante que oferece um vislumbre íntimo do coração de um rei moderno.',
      image:
        'https://www.perfumesecompanhia.pt/fotos/produtos/3423473101154.jpg',
      size: SizeEnum.Big,
      notes: NotesEnum.Lavanda,
      price: '55,05',
      id: 8,
    },
    {
      name: 'Tommy',
      brand: 'Tommy Hilfiger',
      description:
        'Captando a liberdade e o otimismo de uma viagem, Tommy Eau de Toilette é um aroma amadeirado efervescente inspirado em cada um dos lugares e experiências que nos tornam diferentes. Tal como a transformação do estado de uma paisagem, as suas notas refrescantes de Maçã crocante e Patchouli mudam para Lavanda calmante e Madeira de Cedro âmbar. Uma fragrância embebida pelo espírito coletivo e respetivos contrastes. A sua fórmula original e icónica incentiva-o a aceitar tudo, e a mudar cada dia e cada momento para melhor.',
      image:
        'https://www.perfumesecompanhia.pt/fotos/produtos/0022548424865_1.jpg',
      size: SizeEnum.Medium,
      notes: NotesEnum.Lavanda,
      price: '56,48',
      id: 9,
    },
    {
      name: 'Mercedes-Benz Man',
      brand: 'Mercedes-Benz',
      description:
        'O Mestre Perfumista Olivier Cresp cria esta nova fragrância refinada e intemporal, um frutado, amadeirado, aromático. Com um toque frutado moderno, onde sentimos as sementes de Abelmosco e Pêra, temos no inicio uma sensação de frescura contemporânea. No coração temos a folha de cedro e o gerânio, que transmitem masculinidade e intensidade. A madeira rosada e o musgo de carvalho dão-lhe o requinte de um fundo amadeirado.',
      image:
        'https://www.perfumesecompanhia.pt/fotos/produtos/3595471061027_1.jpg',
      size: SizeEnum.Big,
      notes: NotesEnum.Maçã,
      price: '46,58',
      id: 10,
    },
    {
      name: 'Cool Water/H',
      brand: 'Davidoff',
      description: 'Cool Water Parfum - fresca, masculina, sofisticada.',
      image:
        'https://www.perfumesecompanhia.pt/fotos/produtos/3614229387049_1.jpg',
      size: SizeEnum.Small,
      notes: NotesEnum.Café,
      price: '71,03',
      id: 11,
    },
    {
      name: "Terre d'Hermès",
      brand: 'Hermès',
      description:
        "A intensidade dos citrinos e das pimentas aliada a um apontamento de sílex atestam a marca da terra. Terre d'Hermès conta a relação do homem com a terra, o seu diálogo humilde e harmonioso com a natureza e os elementos. Terre d'Hermès é o perfume que volta a ligar o homem às suas orgines, à origem da sua força criadora.",
      image:
        'https://www.perfumesecompanhia.pt/fotos/produtos/3346131400041_1.jpg',
      size: SizeEnum.Big,
      notes: NotesEnum.Rosa,
      price: '63,19',
      id: 12,
    },
  ];

  addItem(item: {
    name: string;
    brand: string;
    description: string;
    image: string;
    size: SizeEnum;
    notes: NotesEnum;
    price: string;
    id: number;
  }) {
    this.items.push(item);
  }

  removeItem(id: number) {
    let i: number = 0;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === id) {
        this.items.splice(i, 1);
      }
    }
  }
}
