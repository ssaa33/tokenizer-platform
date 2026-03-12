'use client';

interface AssetCardProps {
  image: string;
  category: string;
  title: string;
  value: string;
  financed: number;
  color: 'blue' | 'purple' | 'orange';
}

export default function AssetCard({ image, category, title, value, financed, color }: AssetCardProps) {
  const colorClasses = {
    blue: {
      border: 'hover:border-blue-500',
      button: 'bg-blue-600 hover:bg-blue-700',
      text: 'text-blue-400',
    },
    purple: {
      border: 'hover:border-purple-500',
      button: 'bg-purple-600 hover:bg-purple-700',
      text: 'text-purple-400',
    },
    orange: {
      border: 'hover:border-orange-500',
      button: 'bg-orange-600 hover:bg-orange-700',
      text: 'text-orange-400',
    },
  };

  const colors = colorClasses[color];

  return (
    <div className={`bg-slate-800 rounded-xl overflow-hidden border border-slate-700 ${colors.border} transition`}>
      {/* Imagen real */}
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="p-4">
        <div className={`text-sm ${colors.text} mb-2`}>{category}</div>
        <h4 className="text-xl font-bold mb-2">{title}</h4>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-slate-400">Valor Activo</span>
          <span className="font-bold">{value}</span>
        </div>

        {/* Barra de progreso */}
        <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
          <div 
            className={`h-2 rounded-full ${colors.button}`} 
            style={{width: `${financed}%`}}
          ></div>
        </div>
        <div className="text-sm text-slate-400 mb-4">Financiado {financed}%</div>

        {/* Botón */}
        <button className={`w-full ${colors.button} py-2 rounded-lg font-semibold transition`}>
          Invertir Ahora
        </button>
      </div>
    </div>
  );
}