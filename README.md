# ECharts Dashboard
This project is a simple dashboard example built using React + ECharts. The dashboard visualizes data through BarChart and LineChart components.

## Components and Features Used

### echarts: 5.6.0

### BarChart
A chart component that displays data in the form of vertical bars.

### LineChart
A chart component that visualizes data trends over time using connected lines.

### universalTransition
Enables smooth animated transitions when chart elements change state. When elements (such as bars or lines) update, they smoothly transform into their new positions instead of re-rendering abruptly.

### animationDurationUpdate
Specifies the duration (in milliseconds) of the animation during data updates.

### onEvents
A parameter used to capture chart events (e.g., click, mouseover) and trigger callback functions accordingly.

## Explanation
Apache ECharts automatically detects data changes (additions, updates, deletions) and visualizes these transitions with smooth animations. Parameters like animationDurationUpdate and universalTransition ensure that chart elements move fluidly to their new positions. This makes data updates visually clear and pleasant for the user to follow.

## Optimization
- In the BarChart component, when updating selected values via the onSelect function, the parent component’s state change caused the child BarChart to fully re-render. This led to bars being removed and recreated on every update.
- To prevent this, React.memo was implemented.
- Additionally, useCallback was used to optimize function references and avoid unnecessary re-renders.

## Installation and Run

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

Build the project for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```
