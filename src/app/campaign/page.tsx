"use client"
import * as React from 'react';
import Home from '../home/page';
import CampaignContent from '@/components/Campaign';

export interface IAppProps {
}

export default function CampaignPage(props: IAppProps) {
    return (
        <div>
            <Home>
                <CampaignContent />
            </Home>
        </div>
    );
}
