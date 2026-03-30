const SvgBase = ({ children, size, className, ...props }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width={size || "100%"}
    height={size || "100%"}
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {children}
  </svg>
);

export const Fragil = (props: any) => (
  <SvgBase {...props}>
    {/* Taça rachada */}
    <path d="M 30,20 L 70,20 L 60,60 L 50,60 L 50,85 L 35,85 L 35,90 L 65,90 L 65,85 L 50,85 L 50,60 L 40,60 Z" fill="currentColor" />
    <path d="M 45,20 L 55,40 L 45,50 L 55,60" strokeWidth="2" stroke="white" />
  </SvgBase>
);

export const EsteLadoParaCima = (props: any) => (
  <SvgBase {...props}>
    {/* Setas e barra horizontal */}
    <path d="M 15,90 L 85,90" strokeWidth="8" />
    <path d="M 30,80 L 30,20 M 15,35 L 30,20 L 45,35" strokeWidth="8" />
    <path d="M 70,80 L 70,20 M 55,35 L 70,20 L 85,35" strokeWidth="8" />
  </SvgBase>
);

export const MantenhaSeco = (props: any) => (
  <SvgBase {...props}>
    {/* Guarda-chuva */}
    <path d="M 50,20 A 35,35 0 0,0 15,55 L 85,55 A 35,35 0 0,0 50,20 Z" fill="currentColor" />
    <path d="M 50,55 L 50,85 A 5,5 0 0,0 60,85" strokeWidth="6" />
    {/* Pingos */}
    <path d="M 30,65 L 25,75 M 45,67 L 40,77 M 60,65 L 55,75 M 75,67 L 70,77" strokeWidth="4" strokeDasharray="3 3"/>
  </SvgBase>
);

export const ProtegerCalor = (props: any) => (
  <SvgBase {...props}>
    {/* Sol e teto sobre a caixa */}
    <circle cx="25" cy="25" r="8" fill="currentColor" />
    <path d="M 25,5 L 25,12 M 25,38 L 25,45 M 5,25 L 12,25 M 38,25 L 45,25 M 11,11 L 16,16 M 34,34 L 39,39 M 11,39 L 16,34 M 34,11 L 39,16" strokeWidth="3" />
    <path d="M 50,40 L 80,40 L 80,70 L 50,70 Z" fill="currentColor" />
    <path d="M 40,35 L 65,15 L 90,35" strokeWidth="5" />
  </SvgBase>
);

export const NaoUsarGanchos = (props: any) => (
  <SvgBase {...props}>
    {/* Gancho com X */}
    <path d="M 40,70 L 40,40 A 15,15 0 0,1 70,40 A 10,10 0 0,1 60,50 L 55,45" strokeWidth="6" />
    <circle cx="40" cy="75" r="5" fill="currentColor" />
    <path d="M 20,20 L 80,80 M 80,20 L 20,80" stroke="red" strokeWidth="8" />
  </SvgBase>
);

export const NaoRolar = (props: any) => (
  <SvgBase {...props}>
    {/* Caixa rolando com X */}
    <rect x="35" y="35" width="30" height="30" strokeWidth="4" transform="rotate(25 50 50)" />
    <path d="M 15,85 L 85,85" strokeWidth="4" />
    <path d="M 25,60 A 30,30 0 0,1 75,60" />
    <path d="M 70,55 L 75,60 L 80,55" />
    <path d="M 20,20 L 80,80 M 80,20 L 20,80" stroke="red" strokeWidth="8" />
  </SvgBase>
);

export const CentroGravidade = (props: any) => (
  <SvgBase {...props}>
    <g strokeWidth="4">
      <circle cx="50" cy="50" r="35" />
      <path d="M 50,15 L 50,85 M 15,50 L 85,50" />
      <path d="M 50,15 A 35,35 0 0,1 85,50 L 50,50 Z" fill="currentColor" />
      <path d="M 50,50 L 15,50 A 35,35 0 0,0 50,85 Z" fill="currentColor" />
    </g>
  </SvgBase>
);

export const NaoEmpilhar = (props: any) => (
  <SvgBase {...props}>
    <rect x="30" y="50" width="40" height="35" strokeWidth="5" fill="black" />
    <rect x="30" y="15" width="40" height="35" strokeWidth="5" fill="white" stroke="black" />
    <path d="M 20,10 L 80,55 M 80,10 L 20,55" stroke="red" strokeWidth="8" />
  </SvgBase>
);

export const LimiteEmpilhamento = (props: any) => (
  <SvgBase {...props}>
    <rect x="30" y="55" width="40" height="30" strokeWidth="5" fill="black" />
    <rect x="30" y="25" width="40" height="30" strokeWidth="5" fill="white" stroke="black" />
    <text x="50" y="47" fontSize="16" fontWeight="bold" textAnchor="middle" stroke="none" fill="black">MÁX</text>
  </SvgBase>
);

export const NaoUsarEstilete = (props: any) => (
  <SvgBase {...props}>
    <rect x="25" y="45" width="50" height="40" strokeWidth="5" fill="currentColor" />
    <path d="M 35,15 L 55,40 L 60,35 L 40,10 Z" fill="currentColor" stroke="none" />
    <path d="M 20,20 L 80,80 M 80,20 L 20,80" stroke="red" strokeWidth="8" />
  </SvgBase>
);

export const NaoUsarEmpilhadeira = (props: any) => (
  <SvgBase {...props}>
    <path d="M 15,65 L 45,65 L 45,35 L 35,35 L 35,45 L 25,45 L 25,65 M 30,65 L 30,75 M 40,65 L 40,75" strokeWidth="5" />
    <path d="M 45,80 L 75,80 L 75,70 L 45,70" strokeWidth="4" />
    <path d="M 20,20 L 80,80 M 80,20 L 20,80" stroke="red" strokeWidth="8" />
  </SvgBase>
);

export const NaoUsarCarrinho = (props: any) => (
  <SvgBase {...props}>
    <path d="M 30,30 L 40,80 L 60,80 M 60,90 A 5,5 0 1,0 60,80 A 5,5 0 1,0 60,90 M 20,20 L 30,30" strokeWidth="5" />
    <path d="M 50,40 L 40,60" strokeWidth="4" />
    <path d="M 20,20 L 80,80 M 80,20 L 20,80" stroke="red" strokeWidth="8" />
  </SvgBase>
);

export const LingarAqui = (props: any) => (
  <SvgBase {...props}>
    <ellipse cx="25" cy="50" rx="15" ry="8" strokeWidth="4" />
    <ellipse cx="50" cy="50" rx="15" ry="8" strokeWidth="4" />
    <ellipse cx="75" cy="50" rx="15" ry="8" strokeWidth="4" />
  </SvgBase>
);

export const LimiteTemperatura = (props: any) => (
  <SvgBase {...props}>
    <path d="M 45,20 L 45,60 A 15,15 0 1,0 55,60 L 55,20 A 5,5 0 1,0 45,20" strokeWidth="4" />
    <circle cx="50" cy="70" r="6" fill="currentColor" />
    <path d="M 50,70 L 50,40" strokeWidth="4" />
    <path d="M 55,30 L 65,30 M 55,40 L 65,40 M 55,50 L 65,50" strokeWidth="2" />
  </SvgBase>
);

export const BracadeirasAqui = (props: any) => (
  <SvgBase {...props}>
    <rect x="35" y="30" width="30" height="40" strokeWidth="5" fill="black" />
    <path d="M 5,50 L 25,50 M 15,40 L 25,50 L 15,60" strokeWidth="6" />
    <path d="M 95,50 L 75,50 M 85,40 L 75,50 L 85,60" strokeWidth="6" />
  </SvgBase>
);

export const NaoUsarBracadeiras = (props: any) => (
  <SvgBase {...props}>
    <BracadeirasAqui />
    <path d="M 20,20 L 80,80 M 80,20 L 20,80" stroke="red" strokeWidth="8" />
  </SvgBase>
);

export const LimitePeso = (props: any) => (
  <SvgBase {...props}>
    <rect x="25" y="35" width="50" height="40" strokeWidth="5" fill="none" />
    <text x="50" y="60" fontSize="14" fontWeight="bold" textAnchor="middle" stroke="none" fill="currentColor">MAX KG</text>
    <path d="M 50,35 L 50,15 M 40,25 L 50,35 L 60,25" strokeWidth="4" />
  </SvgBase>
);

export const ManusearComCuidado = (props: any) => (
  <SvgBase {...props}>
    <rect x="35" y="40" width="30" height="30" strokeWidth="4" fill="currentColor" />
    <path d="M 30,50 C 20,50 15,60 25,70 C 35,80 50,85 50,85 C 50,85 65,80 75,70 C 85,60 80,50 70,50" fill="none" strokeWidth="4" />
  </SvgBase>
);
