// 测试评分算法
function testScoring() {
    const ip = '220.246.84.46';
    
    // 模拟威胁数据
    const threatData = [
        { source: '恶意软件数据库', isThreat: true, severity: 'critical' },
        { source: '垃圾邮件列表', isThreat: false, severity: null },
        { source: '僵尸网络', isThreat: false, severity: null },
        { source: '攻击源IP', isThreat: true, severity: 'critical' },
        { source: '钓鱼网站', isThreat: false, severity: null }
    ];
    
    let score = 100;
    const riskFactors = [];
    const debugInfo = { initialScore: 100, deductions: [] };
    
    // 威胁情报检查
    let threatDeduction = 0;
    threatData.forEach(threat => {
        if (threat.isThreat) {
            let deduction = 0;
            switch (threat.severity) {
                case 'critical': deduction = 30; break;
                case 'high': deduction = 20; break;
                case 'medium': deduction = 10; break;
                case 'low': deduction = 5; break;
            }
            threatDeduction += deduction;
            riskFactors.push(`${threat.source} (${threat.severity})`);
            debugInfo.deductions.push(`威胁情报-${threat.source}: -${deduction}`);
        }
    });
    
    // 扣分
    if (threatDeduction > 0) {
        score -= threatDeduction; // 新版本：移除了40分上限
        console.log(`威胁扣分: ${threatDeduction}, 扣分后: ${score}`);
    }
    
    // 最低分数保证
    const hasCriticalThreats = threatData.some(threat => 
        threat.isThreat && threat.severity === 'critical'
    );
    const hasHighThreats = threatData.some(threat => 
        threat.isThreat && threat.severity === 'high'
    );
    
    console.log(`风险因素数量: ${riskFactors.length}`);
    console.log(`有critical威胁: ${hasCriticalThreats}`);
    console.log(`有high威胁: ${hasHighThreats}`);
    
    if (riskFactors.length === 0) {
        score = 100;
        console.log('无风险 -> 100分');
    } else if (hasCriticalThreats) {
        score = Math.max(score, 30);
        console.log(`有critical威胁 -> 最低30分: ${score}`);
    } else if (hasHighThreats) {
        score = Math.max(score, 70);
        console.log(`有high威胁 -> 最低70分: ${score}`);
    } else if (riskFactors.length <= 1) {
        score = Math.max(score, 98);
        console.log(`1个低风险 -> 最低98分: ${score}`);
    } else if (riskFactors.length <= 2) {
        score = Math.max(score, 90);
        console.log(`2个低风险 -> 最低90分: ${score}`);
    } else {
        score = Math.max(score, 80);
        console.log(`多个低风险 -> 最低80分: ${score}`);
    }
    
    const finalScore = Math.max(0, Math.min(100, Math.round(score)));
    
    console.log('=== 测试结果 ===');
    console.log(`最终得分: ${finalScore}`);
    console.log(`风险因素: ${riskFactors.join(', ')}`);
    console.log(`扣分详情: ${debugInfo.deductions.join(', ')}`);
    
    return finalScore;
}

// 运行测试
testScoring();