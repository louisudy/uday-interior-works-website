
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, Home, Phone } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught artisan error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-stone-50 flex items-center justify-center p-6 text-center">
          <div className="max-w-md w-full bg-white rounded-[3rem] p-12 shadow-2xl border border-stone-100">
            <div className="w-20 h-20 bg-amber-50 text-amber-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <AlertTriangle size={40} />
            </div>
            <h2 className="text-3xl font-serif text-stone-900 mb-4">Something went wrong</h2>
            <p className="text-stone-500 mb-10 leading-relaxed font-light">
              Our digital studio encountered a structural error. Don't worry, our real-world craftsmen are still standing by.
            </p>
            <div className="space-y-4">
              <button 
                onClick={() => window.location.href = '/'}
                className="w-full bg-stone-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-amber-600 transition-colors"
              >
                <Home size={18} />
                Return to Studio
              </button>
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="w-full border border-stone-200 text-stone-600 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-stone-50 transition-colors"
              >
                <Phone size={18} />
                Call Workshop
              </a>
            </div>
          </div>
        </div>
      );
    }

    // Fix: Correctly access 'children' from the component's props object.
    return this.props.children;
  }
}

export default components/ErrorBoundary.tsx;
